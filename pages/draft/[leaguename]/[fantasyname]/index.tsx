import { Fixture, Teams, League, Players, Participant } from "@prisma/client"
import prisma from "@lib/prisma";
import { GetServerSideProps } from 'next'


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
  const[ showDraft, setShowDraft]=useState(false)
 const socketdata = {message: message, message2:message2, counter:counter, balance:balance, usersinroom:watu,teams:teams}
  const showDraftPopup = () => {
    setShowDraft(!showDraft)
  }
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



  const letmein = async () => {
    const username = focusonparticipant.fantasyname
    socket.auth = { username };
    socket.connect();
    setShowDraft(true)

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
    <div>
     <div id="acquire" className={`${ showDraft ? "" : "hidden"} absolute top-24 z-40 left-20 right-20`}> <DraftPopup players={ players} ondraftPick={draftPlayer}  draftPeople={ draftPeople} socketdata={socketdata} /></div>
      <div >

        
          <div className="mb-3">
                 <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-4xl text-center font-xix ">DRAFT LOBBY</h1>
          <div className=" mt-5 text-center">
            <span className="text-gray-300 font-bold text-xl">Welcome to the Draft!</span>
            <h2 className="text-gray-300 font-bold text-xl">league: {focusonleague.name}</h2>
            <h3 className="text-gray-300 font-bold text-xl">Team: {focusonparticipant.fantasyname}</h3>

           </div>

        </div>
        <div className="w-96 mx-auto">
          
          <h1 className="text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-2xl">Draft Rules</h1>
          <ul className="list-disc text-gray-300">
            <li>
              Ensure you have enough balance to partcicipate(each player costs $50,000 hence six slots 50,000 x 6=300,000)
            </li>
                <li>
              Click on <strong className=" bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">enter room button </strong>   to enter the draft room 
            </li>
            <li>
              Each round lasts <strong className=" bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">five minutes</strong> 
            </li>
            <li>click select to open the list of teams and players , click the plus sign to select the player from the table and click confirm to draft the player</li>
            <li>
              If you go 3 slots without a pick you will be kicked out of the draft and the league
            </li>
          </ul>
        
        </div>
        
        

     


       
  
  

      </div>

      
      <div className="w-72 mx-auto text-center mt-5">
      <h1 className="font-bold text-gray-300">Happy Drafting!!</h1>
          <button className="outline outline-1 mt-4 outline-secondary px-5 py-1 rounded-full text-gray-300 capitalize" onClick={letmein}>enter room</button> 


        
          
        </div>

      
        
      




{/*      
        <div className="text-center"  >
            <h1 style={{ color: "#ffd204" }}>{balance === 0 ? null : (<>balance : {balance}</>)}</h1>
         

            {
              message ? (<div style={{ color: "#ffd204", display: "flex", flexDirection: "column", justifyContent: "center" }} ><h1>draft events</h1><p style={{ color: "#ffd204" }}>{message}</p></div>) : (<p style={{ color: "#ffd204" }}>draftlog</p>)
            }


            <div >


              {
                message2 ? (<h1 style={{ color: "#ffd204" }}>{message2}</h1>) : (<h1 style={{ color: "#ffd204" }}></h1>)
              }</div>
          </div> */}

  
    </div>
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


  const userId = user?.id

  return {
    props: { focusonleague, focusonparticipant, participants, teams, players, userId },
  }
}


export default Draft
