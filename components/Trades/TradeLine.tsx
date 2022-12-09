
import {useState, useEffect} from 'react'
const TradeLine = ({showingAcquire,showingRelease,selectedPlayer2,selectedPlayer}:{showingAcquire:any,showingRelease:any,selectedPlayer2:any,selectedPlayer:any}) => {

  return (

      <div className="grid grid-flow-row grid-cols-6 auto-rows-[32px] mt-2 space-x-3 bg-gray-light px-3 py-1 rounded-full">
       <button onClick={showingAcquire} className="rounded-full px-5 capitalize my-auto uppercase outline  outline-secondary   max-w-max"><span className="uppercase">select</span></button>
      <button  className="my-auto">{selectedPlayer2 ? selectedPlayer2.split(" ")[0] : null}</button>
        <button  onClick={ showingRelease} className="rounded-full px-5 capitalize my-auto  outline  outline-secondary uppercase   max-w-max"><span className="uppercase">select</span></button>
      <button  className="my-auto">{selectedPlayer}</button>
        <p  className="my-auto"></p>
        <p  className="my-auto">$50,000</p> 
        </div>
      
    )
}


export default TradeLine
