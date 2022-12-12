import { Server } from "socket.io";
import type { NextApiRequest, NextApiResponse } from 'next';
import { InMemorySessionStore } from "./sessionStore"
import prisma from '../../../lib/prisma'
import { PrismaDraftStore } from "./draftStore"
import {RoomStore} from './roomStore'


const sessionStore = new InMemorySessionStore();
const draftStore = new PrismaDraftStore();

export default async function handler(req: any, res: any) { 
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }
  const io = new Server(res.socket.server);
  res.socket.server.io = io;
  io.use(async (socket, next) => {
    const sessionID = socket.handshake.auth.sessionID;
    if (sessionID) {
      const session = sessionStore.findSession(sessionID);
      if (session) {
        (socket as any).sessionID = sessionID;
        (socket as any).userID = session.userID;
        (socket as any).username = session.username;
        (socket as any).isReady = session.isReady;
        
        return next();
      }
    }
    const username = socket.handshake.auth.username;
  
    if (!username) {
      return next(new Error("invalid username"));
    }
    const userID = await draftStore.getDraftMember((socket as any).room, username);
    (socket as any).sessionID = userID?.id.toString() + "_" + username;
    (socket as any).userID =  userID?.id;
    (socket as any).username = username;
    (socket as any).isReady = userID?.isReady;
  
  
    next();
  })
  io.on("connection", (socket) => {   sessionStore.saveSession((socket as any).sessionID, {
    userID: (socket as any).userID,
    username: (socket as any).username,
    connected: true,
    isReady: (socket as any).isReady,
  });

  // emit session details
  socket.emit("session", {
    sessionID: (socket as any).sessionID,
    userID: (socket as any).userID,
  });
  const roomStore = new RoomStore(io);
  socket.on("joinRoom", async (room) => {
    
    const people:any = io.sockets.adapter.rooms.get(room);
    if (people) {
      const roomppl = [];
      for (const person of people) {
        let personsocket = io.sockets.sockets.get(person);
        if ((personsocket as any).username === (socket as any).username) {
          socket.emit(
            "message",
            (personsocket as any).username + " is already in the room"
          );
        } else {
          socket.join(room);
          (personsocket as any).room = room;
          socket.emit("message", (personsocket as any).username + " joined the room ");
          try {
            const draftMembers = await draftStore.getDraftMembers(room);
            const userbalance:any = draftMembers?.filter((member) => member.fantasyname === (personsocket as any).username);
            draftStore.getDraftMemberWallet(userbalance[0].userId).then((wallet) => { 
              socket.emit("balance", wallet);
            })
          }catch (err) { console.log(err) }
          
         
        }
      }
    } else {
      socket.join(room);
      (socket as any).room = room;
      socket.emit("message", (socket as any).username + " You joined the room " );
      try {
        const draftMembers = await draftStore.getDraftMembers(room);
        const userbalance:any = draftMembers?.filter((member) => member.fantasyname === (socket as any).username).map((member) => member.userId);
        draftStore?.getDraftMemberWallet(userbalance[0]).then((wallet) => { 
          socket.emit("balance", wallet);
        })
      }catch (err) { console.log(err) }
   

    }

    await roomStore.onPlayerReady(socket);
  


  });


  socket.on("draftPick", async (data) => {
   await roomStore._resetTimeOut();

    const userId = data.userId;
    console.log(userId);
    await draftStore.getDraftMemberWallet(userId).then(async (balance) => {
      console.log(balance);
      if (balance as number > 500) {
        try {
          const FantasyName = data.fantasyname;
          const updatePosition = data.role;
          const updateValue = data.name;
          const draftName = data.draftName;
          const leagueId = data.leagueId;
          const choiceId = data.choiceId;
    
          draftStore
            .updateDraftPick(
              FantasyName,
              updatePosition,
              updateValue,
              leagueId,
              choiceId,
              userId
            )
            .then(() => {
              draftStore.getDraftMembers(draftName).then((data) => {
                io.to(draftName).emit("people", data);
              });
         
            }).then( () => {
              draftStore.getDraftMemberWallet(userId).then((balance) => { 
                socket.emit("balance", balance)
              })
            })
        } catch (e) {
          console.log(e);
        }
      }
      else {
        socket.emit("message", `not enough credits ${balance}` );
      }


    })
    await roomStore._nextTurn();


  });

  const users: { userID: any; username: any; connected: any; isReady: any; }[] = [];
  sessionStore.findAllSessions().forEach((session) => {
    users.push({
      userID: session.userID,
      username: session.username,
      connected: session.connected,
      isReady: session.isReady,
    });
  });
  console.log(users);
  socket.emit("users", users);

  socket.broadcast.emit("user connected", {
    userID: (socket as any).userID,
    username: (socket as any).username,
    connected: true,
    isReady: (socket as any).isReady,
  });

  socket.on("disconnect", async () => {
    const matchingSockets = await io.in((socket as any).userID).fetchSockets();
    const isDisconnected = (matchingSockets as any).size === 0;

    if (isDisconnected) {
      // notify other users
      socket.broadcast.emit("user disconnected", (socket as any).userID);
      // update the connection status of the session
      sessionStore.saveSession((socket as any).sessionID, {
        userID: (socket as any).userID,
        username: (socket as any).username,
        connected: false,
        isReady: (socket as any).isReady,
      });
    }
  });



  });
  
  res.end();
}
