
import {useState, useEffect} from 'react'
const TradeLine = ({showingAcquire,showingRelease}:{showingAcquire:any,showingRelease:any}) => {

  return (

      <div className="grid grid-flow-row grid-cols-6 auto-rows-[32px] mt-2 space-x-3 bg-gray-light px-3 py-1 rounded-full">
       <button className="rounded-full px-5 capitalize my-auto uppercase outline  outline-secondary   max-w-max"><span className="uppercase">select</span></button>
      <button onClick={ showingAcquire} className="my-auto">why</button>
        <button className="rounded-full px-5 capitalize my-auto  outline  outline-secondary uppercase   max-w-max"><span className="uppercase">select</span></button>
      <button onClick={ showingRelease}  className="my-auto">why</button>
        <p  className="my-auto"></p>
        <p  className="my-auto">$50,000</p> 
        </div>
      
    )
}


export default TradeLine
