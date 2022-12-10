
import {useState, useEffect} from 'react'
const TradeLine = ({showingAcquire,showingRelease,playerIn,playerOut}:{showingAcquire:any,showingRelease:any,playerIn:any, playerOut:any}) => {

  return (

      <div className="grid grid-flow-row grid-cols-5  auto-rows-[32px] mt-2 space-x-3 bg-gray-light px-3 py-1 rounded-full">
       <button onClick={showingAcquire} className="rounded-full px-5 capitalize my-auto uppercase outline  outline-secondary   max-w-max"><span className="uppercase">select</span></button>
      <button className="my-auto">{ playerIn? playerIn.split(" ")[0] : ""}</button>
        <button  onClick={ showingRelease} className="rounded-full px-5 capitalize my-auto  outline  outline-secondary uppercase   max-w-max"><span className="uppercase">select</span></button>
      <button  className="my-auto">{ playerOut? playerOut.split(" ")[0] : ""}</button>
       
        <p  className="my-auto">$50,000</p> 
        </div>
      
    )
}


export default TradeLine
