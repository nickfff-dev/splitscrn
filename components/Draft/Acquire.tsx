import { useState,useEffect } from "react"
import AcquireLine from "./AcquireLine"
import AcquireTeam from "./AcquireTeam"

const Acquire = ({closeAcquire, players,fetchPlayer, teams}:{closeAcquire:any ,players:any,fetchPlayer:any,teams:any}) => {
  const [show1, setShow1] = useState(false)
  const showDropwdwn = () => { 
    setShow1(!show1)  
  }

  const [mode, setMode] = useState("players")
  
  const filterMode = (mode: any) => {
    setMode(mode)
    setShow1(false)  
  }
  return (<div className="bg-gradient-to-r from-primary to-secondary  p-[2px] rounded-[16px] max-w-[1100px] w-full mx-auto">
    <div className="bg-gray-dark rounded-[16px] p-5">
      <div className="grid grid-flow-row grid-cols-8 auto-rows-auto  space-x-3 ">
        
      <div className="col-start-1 col-end-2 row-start-1 row-end-2  text-gray-300    p-2  rounded-xl">
          <h1 className=" font-bold text-xl bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent">ACQUIRE</h1>  </div>
          <div className="col-start 3 col-end-5 p-2"><span className="">
    <button id="dropdownDividerButton" onClick={ showDropwdwn } data-dropdown-toggle="dropdownDivider1" className=" rounded-lg   text-center text-white inline-flex items-center font-bold uppercase" type="button"> <p className="bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent">{mode}</p><svg className="w-2 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
    <div id="dropdownDivider1" className={`${show1 ? "z-40" : "hidden"}  mb-12  absolute     text-center bg-white max-w-40  rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
    <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownDividerButton">

         
                <li  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <button onClick={() => {
                    filterMode("players");
                    setShow1(false)
                  }} className="inline py-2 px-4 text-center text-[10px] uppercase">Players</button>
                </li>
              
                <li  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <button onClick={() => {
                   filterMode("teams");
                    setShow1(false)
                  }} className="inline py-2 px-4 text-center text-[10px] uppercase">Teams</button>
                </li>
          
     
</ul>
      </div>
             
      </span></div>
      <div className="col-start-8 col-end-9 row-start-1 row-end-2  text-gray-300">
          <input className="text-left rounded-full bg-gray-light border px-2 border-gray-light h-8  w-full" placeholder="Search...." /> </div>
          <button onClick={closeAcquire} className="absolute top-1  right-[9vw] inline-flex items-center" 
><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF9429" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        </button>
        {
          mode === "players" ? (<><div className="grid grid-flow-row grid-cols-8 col-start-1 col-end-9  row-start-3 row-end-4    text-gray-300  text-center space-x-3 space-y-1 px-3 py-1 ">
          <p>NAME</p>
        <p>REGION</p>
        <p>TEAM</p>
       
        <p>ROLE</p>
            <p>PRICE</p> 
            <p></p> 
            <p>AVG POINTS</p>
            <p></p>

          </div>
        <div className="col-start-1 col-end-9  row-start-4 row-end-7  text-gray-300  p-2 text-center rounded-xl max-h-[400px] overflow-y-scroll overflow-x-hidden scrollbar-style">
          

          {
            players.filter((item: any) => {
              if (item.selected === false) {
                return item
               }
            }).map((player: any, index:number) => { 
              return <AcquireLine key={index} player={player} fetchPlayer={fetchPlayer} closeAcquire={closeAcquire}  />
            })
            }
      
      </div></>):(<> <div className="grid grid-flow-row grid-cols-8 col-start-1 col-end-9  row-start-3 row-end-4    text-gray-300  text-center space-x-3 space-y-1 px-3 py-1 ">
        <p>NAME</p>
        <p>TOP</p>
        <p>JUNGLE</p>
       
        <p>MID</p>
            <p>BOT</p> 
            <p></p> 
            <p>SUPPORT</p>
            <p></p>
        </div>
        <div className="col-start-1 col-end-9  row-start-4 row-end-7  text-gray-300  p-2 text-center rounded-xl max-h-[400px] overflow-y-scroll overflow-x-hidden scrollbar-style">

          {
            teams.map((team: any, index: number) => {
              return (
               <AcquireTeam  key={index} team={team} fetchTeam={fetchPlayer} closeAcquire={closeAcquire} />
             )
           })
            
          }
        </div></>)
        }

     
      </div>
      
    </div>
  </div>)
}

export default Acquire
