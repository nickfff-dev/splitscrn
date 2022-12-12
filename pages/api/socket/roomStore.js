import { InMemorySessionStore } from "./sessionStore"

import { PrismaDraftStore } from "./draftStore"

const draftStore = new PrismaDraftStore();
const sessionStore = new InMemorySessionStore();

export class RoomStore {
  constructor(io) {
    this.io = io;
    
    this.teamPickArray = [];
    this.draftMembersWithSocketId = [];
    this.counter = 300 * 1000;
    this.draftTimeOut = null;
    this.maxTimer = 300 * 1000;
    this.draftOrder = 0;
  }

  _updateDraftOrder() {
    if (this.draftOrder < this.teamPickArray.length) {
      this.draftOrder += 1;
    } else {
      this.draftOrder = 0;
    }
  }
//  add function for timer to start count down
  async startTimer() { 
    var turnplayerz = this.draftMembersWithSocketId.filter(
      (member) => member.draftOrder === this.teamPickArray[this.draftOrder]
    )[0];
if (turnplayerz) {
  this.io.to(turnplayerz.socketId).emit("counter", this.counter);

  this.counter -= 1000;
  if (this.counter === 0) {
    
return
  }
  setTimeout(() => {
    this.startTimer();
  }, 1000);
    }
  }

  // function to reset counter


  async emitUsers() {
    const users = [];
    sessionStore.findAllSessions().forEach(async (session) => {
      users.push({
        userID: session.userID,
        username: session.username,
        connected: session.connected,
        isReady: session.isReady,
      });
    });
    console.log(users);
    socket.emit("users", users);
  }

  async emitBalance(room,socket) {
    try {
      const draftMembers = await draftStore.getDraftMembers(room);
      const userbalance = draftMembers.filter(
        (member) => member.fantasyname === socket.username
      );
      draftStore.getDraftMemberWallet(userbalance[0].userId).then((wallet) => {
        socket.emit("balance", wallet);
      });
    } catch (err) {
      console.log(err);
    }
  }

  async ondraftPick() {
    await this._resetTimeOut();
    await this._nextTurn();
  }

  async emitDraftMembers(room) {
    const draftMembers = await draftStore.getDraftMembers(room);
    this.io.to(room).emit("people", draftMembers);
  }

  async assignDraftOrder(room) {
    const addTodraft = this.io.sockets.adapter.rooms.get(room);
   console.log("add", addTodraft);
    const draft = {
      name: room,
    };

    if (addTodraft) {
      await draftStore
      .saveDraft(draft)
      .then(async () => {
        for (const newMember of addTodraft) {
          const memberSocket = this.io.sockets.sockets.get(newMember);
          const member = {
            fantasyname: memberSocket.username,
          };
          const draftName = room;
          await draftStore.addDraftMember(draftName, member);
        }
      })
      .then(async () => {
        await draftStore.getDraftMembers(room).then(async (draftMemmbers) => {
          const draftMemmbersLength = draftMemmbers.length;

          const draftposition = [];
          for (let i = 0; i < draftMemmbersLength; i++) {
            draftposition.push(i);
          }

          const shuffled = draftposition.sort(() => 0.5 - Math.random());
          const selected = shuffled.slice(0, draftMemmbersLength);

          for (let i = 0; i < draftMemmbersLength; i++) {
            await draftStore.updateDraftMemberDraftOrder(
              room,
              draftMemmbers[i].fantasyname,
              selected[i]
            );
          }

          this.io.to(room).emit("people", draftMemmbers);
        });
      })
      .then(async () => {
        await this.generateSnakeDraftOrder(room);
      });
    }
  }

  async generateDraftMemberWithSocketID(room) {
    const roommembers = this.io.sockets.adapter.rooms.get(room);
    const draftMembers = await draftStore.getDraftMembers(room);

    this.draftMembersWithSocketId = draftMembers.map((draftMember) => {
      const memberSocket = Array.from(roommembers).find((member) => {
        const memberSocket = this.io.sockets.sockets.get(member);
        return memberSocket.username === draftMember.fantasyname;
      });
      return {
        ...draftMember,
        socketId: memberSocket,
      };
    });
  }

  async getDraftMemberWithSocketID(room) {
    if (this.draftMembersWithSocketId.length > 0) {
      return this.draftMembersWithSocketId;
    } else {
      await this.generateDraftMemberWithSocketID(room);
      return this.draftMembersWithSocketId;
    }
  }

  async generateSnakeDraftOrder(room) {
    if (this.draftMembersWithSocketId.length === 0) {
      await this.getDraftMemberWithSocketID(room);
    }
    var numberofteams = this.draftMembersWithSocketId.length;
    var numberofrounds = 6;

    for (var i = 0; i < numberofrounds; i++) {
      if (i % 2 == 0) {
        for (var j = 0; j < numberofteams; j++) {
          this.teamPickArray.push(j);
        }
      } else {
        for (var x = numberofteams - 1; x >= 0; x--) {
          this.teamPickArray.push(x);
        }
      }
    }

    this.io
      .to(room)
      .emit(
        "message",
        `Draft started`
      );
  }

  async getSnakeDraftOrder(room) {
    if (this.teamPickArray.length > 0) {
      return this.teamPickArray;
    } else {
      await this.generateSnakeDraftOrder(room);
      return this.teamPickArray;
    }
  }

  async onPlayerReady(socket) {
    socket.on("imready", async () => {
      socket.isReady = true;

      sessionStore.updateSession(socket.sessionID);
      await draftStore.updateMemberReady(
        socket.room,
        socket.username
      );
      draftStore.getDraftMembers(socket.room).then(async (members) => { if (members.every((member) => member.isReady === true)) {await this.beginDraft(socket); } });
      
    });
  }

  async beginDraft(socket) {
   
    
        await this.assignDraftOrder(socket.room);
        await this.emitDraftMembers(socket.room);
        await this._emitTurn(this.draftOrder);
      
    
  }

  async _emitTurn(draftOrder) {
    try {
      const turnplayer = this.draftMembersWithSocketId.filter(
        (member) => member.draftOrder === this.teamPickArray[draftOrder]
      )[0];

      if (turnplayer) {
        const turnplayersocket = turnplayer.socketId;
      
        this.io
          .to(turnplayersocket)
          .emit("message2", ` ${turnplayer.fantasyname} It's your turn to pick`);
        const turnplayersocketw = this.io.sockets.sockets.get(turnplayersocket);
  turnplayersocketw.broadcast.emit(  "message", `It's ${turnplayer.fantasyname}'s turn to pick`);
      } 
    } catch (e) {
      console.log(e);
    }
    this.counter = 300 * 1000
    await this.startTimer();
    await this._triggerTimeOut();
     }

  async _nextTurn() {
    try {
      this._updateDraftOrder();

      const turnplayer = this.draftMembersWithSocketId.filter(
        (member) =>
          member.draftOrder === this.teamPickArray[this.draftOrder - 1]
      )[0];

      if (turnplayer) {
        const turnplayersocket = turnplayer.socketId;
        
        this.io
          .to(turnplayersocket)
          .emit(
            "message2",
            ` ${turnplayer.fantasyname} your turn to pick is over`
        );
        const turnplayersocketw = this.io.sockets.sockets.get(turnplayersocket);
  turnplayersocketw.broadcast.emit(  "message", `${turnplayer.fantasyname}'s turn to pick is over`);

        await this._emitTurn(this.draftOrder);
      }
    
    } catch (e) {
      console.log(e);
    }

   
  }

  async _triggerTimeOut() {
    this.draftTimeOut = setTimeout(async () => {
      await this._nextTurn();

    }, this.maxTimer);
  }

  async _resetTimeOut() {

    clearTimeout(this.draftTimeOut);

    
  }



  async _resetCurrentDraft() {
    this.draftOrder = 0;
    this.draftTimeOut = null;
  }
}

module.exports = { RoomStore };
