import { useState } from "react"
import AcquireLine from "./AcquireLine"

const Acquire = ({closeAcquire, players,fetchPlayer}:{closeAcquire:any ,players:any,fetchPlayer:any}) => {

  return (<div className="bg-gradient-to-r from-primary to-secondary  p-[2px] rounded-[16px] max-w-[1100px] w-full mx-auto">
    <div className="bg-gray-dark rounded-[16px] p-5">
      <div className="grid grid-flow-row grid-cols-8 auto-rows-auto  space-x-3 ">
        
      <div className="col-start-1 col-end-2 row-start-1 row-end-2  text-gray-300    p-2  rounded-xl">
      <h1 className=" font-bold text-xl bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent">ACQUIRE</h1>  </div>
      <div className="col-start-8 col-end-9 row-start-1 row-end-2  text-gray-300">
          <input className="text-left rounded-full bg-gray-light border px-2 border-gray-light h-8  w-full" placeholder="Search...." /> </div>
          <button onClick={closeAcquire} className="absolute top-1  right-[9vw] inline-flex items-center" 
><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF9429" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button>
<div className="grid grid-flow-row grid-cols-8 col-start-1 col-end-9  row-start-3 row-end-4    text-gray-300  text-center space-x-3 space-y-1 px-3 py-1 ">
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
      
      </div>
      </div>
      
    </div>
  </div>)
}

export default Acquire
