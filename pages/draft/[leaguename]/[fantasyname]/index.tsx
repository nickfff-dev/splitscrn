import { Fixture, Teams, League, Players, Participant } from "@prisma/client"
import prisma from "@lib/prisma";
import { GetServerSideProps } from 'next'
import { Grid } from '@components/ui';

import { useEffect, useState, useCallback } from "react";
import io, { Socket } from 'Socket.IO-client'
import DraftPopup from "@components/Draft/DraftPopup";
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { InferGetServerSidePropsType } from 'next'
import dayjs from "dayjs";
import {time_convert} from '@lib/calculate'

import { DefaultEventsMap } from "@socket.io/component-emitter";


let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

function Draft({ focusonleague, focusonparticipant, userId, teams, players }: InferGetServerSidePropsType<typeof getServerSideProps>) {


  const [usernamealreadyselected, setUsernamealreadyselected] = useState(false)
  const [watu, setWatu] = useState([{ connected: false, self: true, userID: "", username: "", isReady: false}])
  const [draftPeople, setDraftPeople] = useState([{ adc: "", jungle: "", mid: "", support: "", top: "", team: "", username: "", leaguename: "", leagueId: 0, id: 0,fantasyname:"" }])
  const [message, setMessage] = useState("")
  const [message2, setMessage2] = useState("")
  const [counter, setCounter] = useState(0)
  const [balance, setBalance] = useState(0)
 
 const socketdata = {message: message, message2:message2, counter:counter, balance:balance, usersinroom:watu,teams:teams}

  useEffect(() => { 

    socketInitializer()
  },[])
  const socketInitializer = async () => { 
    await fetch("/api/socket");
    socket = io( {
      autoConnect: false
    });

    // run all the useEffects below here once the socket is connected
    const sessionID = sessionStorage.getItem("sessionID");
    if (sessionID) {

      socket.auth = { sessionID };


      
      socket.connect();

    }

    socket.on("connect", () => {

      socket.emit("joinRoom", focusonleague.name)


      watu.forEach((user: { self: any; connected: boolean; }) => {
        if (user.self) {
          user.connected = true;


        }
      })
    })

    socket.on("session", ({ sessionID, userID }) => {

      socket.auth = { sessionID };


      sessionStorage.setItem("sessionID", sessionID);

      (socket as any).userID = userID;




    });



    socket.on("connect_error", (err: { message: string; }) => {
      if (err.message === "invalid username") {
        console.log("invalid username")

      }
    });

    socket.on("disconnect", () => {

      watu.forEach((user: { self: any; connected: boolean; }) => {
        if (user.self) {
          user.connected = false;
        }
      })
    })

    socket.on("users", (users: any[]) => {
      users.forEach((user: any) => {
        for (
          let i = 0; i < watu.length; i++
        ) {

          const existingUser = watu[i];
          if (existingUser.userID === user.userID) {
            existingUser.connected = user.connected;
            return
          }
        }

        user.self = user.userID === (socket as any).userID;
        watu.push(user);

        setWatu([...watu])



      })

      watu.sort((a: { self: any; username: string; }, b: { self: any; username: string; }) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username < b.username) return -1;
        return a.username > b.username ? 1 : 0;
      })




    })

    socket.on("user connected", (user: { userID: any; username: string, isReady: boolean }) => {

      for (let i = 0; i < watu.length; i++) {
        const existingUser = watu[i];

        if (existingUser.userID === user.userID) {
          existingUser.connected = true;
          return;
        }
      }
      watu.push({
        connected: true,
        self: user.userID === (socket as any).userID,
        userID: user.userID,
        username: user.username,
        isReady: user.isReady

      })

      setWatu([...watu])

    })




    socket.on("user disconnected", (id: any) => {

      for (let i = 0; i < watu.length; i++) {
        const existingUser = watu[i];

        if (existingUser.userID === id) {
          existingUser.connected = false;
          break;
        }
      }



    })
    socket.on("message", (message: any) => {

      setMessage(message)
    })
    socket.on("counter", (count: any) => {
      setCounter(count);
    })
    socket.on("people", (data: any) => {
      console.log(data);
      setDraftPeople(data)
    })
    socket.on("balance", (data: any) => {
      console.log(data);
      setBalance(data)
    })

    socket.on("draftposition", (data: any) => {
      console.log(data)

    })

    socket.on("message2", (message2: any) => {

      setMessage2(message2)
    })
    socket.onAny((event: any, ...args: any) => {
      console.log(event, args);
    })
  }


  const emitPlayerReady = () => {
    socket.emit("imready")
  }

  const letmein = async () => {
    const username = focusonparticipant.fantasyname
    socket.auth = { username };
    socket.connect();

  }

  useEffect(() => {

    if (focusonparticipant.confirmedAttendance === false) {
      window.location.href = `/draft/${focusonleague.leaguename}/${focusonparticipant.fantasyname}/confirmdraft`
    }
  }, [focusonparticipant,focusonleague.leaguename])







  const draftPlayer = useCallback((player:any) => {
   
      socket.emit("draftPick", {
        name: player.name,
        fantasyname: focusonparticipant.fantasyname,
        role: player.position ? player.position : "Team",
        draftName: focusonleague.name,
        leagueId: focusonleague.id,
        choiceId: player.id,
        userId: userId
  
      })

},[])





























  return (
    <>
      <DraftPopup players={ players} ondraftPick={draftPlayer}  draftPeople={ draftPeople} socketdata={socketdata} />
      <div style={{ display: "flex", flexDirection: "row" }}>

        
          <div  style={{ color: "#ffd204", display: "flex", flexDirection: "column", justifyContent: "center", width: "500px" }}   >

            <h1> Draft</h1>
            <h2>leaguename: {focusonleague.name}</h2>
            <h3>fantasyname: {focusonparticipant.fantasyname}</h3>
            <h4> draftposition: {focusonparticipant.draftOrder}</h4>

          </div>
        
        
          <div  style={{ color: "#ffd204", display: "flex", flexDirection: "column", justifyContent: "center", width: "500px" }} >
            <h1 style={{ color: "#ffd204" }}>{balance === 0 ? null : (<>balance : {balance}</>)}</h1>
            <h1 style={{ color: "#ffd204" }}>{counter === 0 ? "wait your turn" : "timer: " + time_convert(counter)
            
            }</h1>

            {
              message ? (<div style={{ color: "#ffd204", display: "flex", flexDirection: "column", justifyContent: "center" }} ><h1>draft events</h1><p style={{ color: "#ffd204" }}>{message}</p></div>) : (<p style={{ color: "#ffd204" }}>draftlog</p>)
            }


            <div >


              {
                message2 ? (<h1 style={{ color: "#ffd204" }}>{message2}</h1>) : (<h1 style={{ color: "#ffd204" }}></h1>)
              }</div>
          </div>
     


       
  
  

      </div>

      
        <div  style={{ color: "#ffd204", display: "flex", flexDirection: "row", justifyContent: "space-between", width: "500px" }}>
          <button style={{ color: "#ffd204", float: "left" }} onClick={letmein}>enter room</button> <br />



          <button style={{ color: "#ffd204" }} onClick={emitPlayerReady}>are you ready?</button><br />
        </div>

      
        
      




     


  
    </>
  )
}



export const getServerSideProps: GetServerSideProps = async (context) => {

  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }
  const leaguename = context.params?.leaguename as string
  const fantasyname = context.params?.fantasyname as string
  const focusonleague = await prisma.league.findUnique({
    where: {
      name: leaguename,
    },
    include: {
      members: true,
      teams: true,
      players: true,
    }
  }).then(async (league) => {
    await prisma.$disconnect()
    return league

  })
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
    }
  })

  const focusonparticipant = focusonleague?.members.find((member) => {
    return member.fantasyname === fantasyname
  })
  const participants = focusonleague?.members
  const teams = focusonleague?.teams

  const players = focusonleague?.players.filter((player) => {
    if (player.selected === false) {
      return player
    }
  })
  console.log(players)

  const userId = user?.id

  return {
    props: { focusonleague, focusonparticipant, participants, teams, players, userId },
  }
}


export default Draft
