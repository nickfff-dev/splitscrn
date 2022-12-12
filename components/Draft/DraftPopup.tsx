
import {useState, useEffect} from "react"
import Acquire from "./Acquire"
import { time_convert } from '@lib/calculate'


const DraftPopup = ({players,ondraftPick,  socketdata, draftPeople}:{players:any,ondraftPick:any, socketdata:any, draftPeople:any}) => {
  const [showAcquire, setShowAcquire] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  
  const fetchPlayer = (player: any) => {
    
    setSelectedPlayer(player)
  }
  const closeAcquire = () => { 
    setShowAcquire(false)
  }
  const showingAcquire = () => { 
    setShowAcquire(!showAcquire)
  }


  return (<div className="bg-gradient-to-r from-primary to-secondary p-1 rounded-xl w-[1000px] w-full  mx-auto">
    <div className="bg-gray-dark p-6 rounded-xl ">

      <div className="grid  grid-flow-row col-start-1 col-end-8 auto-rows-auto justify- items-center  ">
        <div className="grid grid-flow-col col-start-3 col-end-5 grid-cols-2 row-start-1 row-end-2 text-center  gap-24 "><p className="text-gray-300 font-bold" >Player</p><p className="text-gray-300 font-bold" >Balance</p></div>
        <div className="grid grid-flow-col col-start-2 col-end-6 grid-cols-4  items-center  row-start-2 row-end-3  rounded-full bg-gray-medium space-x-12 ">
          <button onClick={showingAcquire} className="rounded-full px-5 py-1  capitalize my-auto uppercase outline outline-1  outline-secondary  text-gray-300 font-bold max-w-max">SELECT</button>

         

          <p className="text-gray-300 font-bold">{ selectedPlayer?  (selectedPlayer as  any).name.split(" ")[0]: null}</p>
          <p className="text-gray-300 font-bold">$ {Number(50000).toLocaleString()}</p>
          <button onClick={() => {
            ondraftPick(selectedPlayer)
          }} className="rounded-full  px-4 py-1    capitalize my-auto uppercase outline outline-1  outline-secondary  text-gray-300 font-bold max-w-max">CONFIRM</button>
        
        
        </div>
          
        <div className="grid grid-flow-col col-start-7  col-end-8 grid-cols-2  row-start-1 row-end-7 ">
          
          <div className=" col-span-2 text-center row-start-1 row-end-2 w-48 "><div className=""><h1 className="text-gray-300 font-bold text-3xl">{socketdata.counter === 0 ? "WAIT FOR": "YOUR"} </h1><h1 className="text-gray-300 font-bold text-3xl">TURN!</h1><h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-3xl">{time_convert(socketdata.counter)}</h1></div></div>
          <div className="col-span-2 text-center w-48 row-start-4 row-end-7 grid  grid-flow-row bg-gray-medium rounded-xl h-[500px] ">
            <div className="row-start-1 row-end-2 h-12 py-1 text-center bg-gray-light rounded-xl"><p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-3xl">${socketdata.balance.toLocaleString()}  </p></div>
            <div className="row-start-2 row-end-3 grid grid-cols-1">

            <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-lg">Room Roster</p>
              {
                socketdata.usersinroom.map((user: any) => {
                  return (
                    <span className="text-gray-300 text-sm" key={user.userID}> {user.username}  </span>
                  )
                })
            }
            
            </div>
            <div className="row-start-4 row-end-5"><p className="text-gray-300 text-sm">{ socketdata.message2}</p></div>
            <div className=" grid grid-flow-row  row-start-6 row-end-7 items-end ">
              
              
              
              <p className="text-gray-300 text-sm">{socketdata.message}</p>
      
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-7 mt-7">
<div className="   grid col-start-1 col-end-7   grid-cols-7 text-center ">       
        <p className="text-gray-300 font-bold ">OWNER</p>
        <p className="text-gray-300 font-bold">TOP</p>
       
        <p className="text-gray-300 font-bold">JUNGLE</p>
          <p className="text-gray-300 font-bold">MID</p> 
          <p className="text-gray-300 font-bold">BOT</p> 
            <p className="text-gray-300 font-bold">SUP</p>
            <p className="text-gray-300 font-bold">TEAM</p>
           </div>
          <ul className="list-decimal list-outside   col-start-1 col-end-7 grid-cols-7 space-y-2 text-white">
          
      
            {
            draftPeople?    draftPeople.map((participant: any, index:number) => {
                return (
                  <li key={index} className="text-center" >
                  <div className="grid   col-start-1 col-end-7 grid-cols-7 h-8 items-center justify-items-between text-center gap-2  bg-gray-light  rounded-full ">
                  <p className=" pl-2 text-gray-300 font-medium ">{participant ?  participant?.fantasyname.split(" ")[0] : null}</p>
              <p className="text-gray-300 font-medium">{ participant ? participant.top.split(" ")[0]: null}</p>
             
              <p className="text-gray-300 font-medium">{ participant ? participant?.jungle.split(" ")[0]:null}</p>
                <p className="text-gray-300 font-medium">{participant ? participant?.mid.split(" ")[0]:null}</p> 
                <p className="text-gray-300 font-medium">{participant ? participant?.adc.split(" ")[0]:null}</p> 
                  <p className="text-gray-300 font-medium">{participant ? participant?.support.split(" ")[0]:null}</p>
                      <p className="text-gray-300 font-medium">{participant ? participant?.team.split(" ")[0]:null}</p>
                      </div>
                  </li>
                )
              }) : null
           }
 
          </ul>
        </div>
      </div>
    </div>
    <div id="acquire" className={`${showAcquire ? "" : "hidden"} absolute top-24 z-40 left-20 right-20`}><Acquire closeAcquire={closeAcquire} players={players} fetchPlayer={fetchPlayer } teams={socketdata.teams} /></div>
  
  </div>)
}

export default DraftPopup
