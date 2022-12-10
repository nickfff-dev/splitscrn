
import {useState, useEffect} from 'react'
const TradeLine = ({showingAcquire,showingRelease,playerIn,playerOut, credits}:{showingAcquire:any,showingRelease:any,playerIn:any, playerOut:any, credits:any}) => {
  
  function kam(cred: any) {
    let wearr;
    if (cred > 0) {
      let we = cred.toLocaleString("en-US")
      wearr = we.split("")
      wearr.splice(0, 0, "+$")
      
    } else {
      let we = cred.toLocaleString("en-US")
      wearr = we.split("")
      wearr.splice(1, 0, "$")
    }
    return  wearr.join("")
  }
 
  return (

      <div className="grid grid-flow-row grid-cols-5  auto-rows-[32px] mt-2 space-x-3 bg-gray-light px-3 py-1 rounded-full">
       <button onClick={showingAcquire} className="rounded-full px-5 capitalize my-auto uppercase outline  outline-secondary   max-w-max"><span className="uppercase">select</span></button>
      <button className="my-auto">{ playerIn? playerIn.split(" ")[0] : ""}</button>
        <button  onClick={ showingRelease} className="rounded-full px-5 capitalize my-auto  outline  outline-secondary uppercase   max-w-max"><span className="uppercase">select</span></button>
      <button  className="my-auto">{ playerOut? playerOut.split(" ")[0] : ""}</button>
       
      <p className={`${credits < 0 ? "text-[#f1312c]" : "text-[#27c831]"} my-auto`}>{credits  ? kam(credits): null}</p> 
        </div>
      
    )
}


export default TradeLine
