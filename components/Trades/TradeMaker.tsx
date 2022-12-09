import { useEffect, useState } from "react"
import TradeLine from "./TradeLine"
import Acquire from "./Acquire"
import Release from "./Release"
const TradeMaker = ({showingAcquire,showingRelease, closeTrade}:{showingAcquire:any,showingRelease:any,closeTrade:any}) => {

  
  const [numberOfTrades, setNumberOfTrades] = useState(1)
  return (

       <div className=" bg-gradient-to-r from-primary  to-secondary p-[2px] rounded-[16px] w-[1000px] mx-auto ">
    <div className="bg-gray-dark rounded-[15px] pl-32 py-4">
      
        <div className="grid grid-flow-row grid-cols-6 auto-rows-auto items-center space-x-3">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2  text-gray-300  uppercase items-center   rounded-xl">
          <p className="bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent font-bold text-3xl">New Trade</p>  </div>
          <div className="col-start-3 col-end-5 row-start-1 row-end-2  text-gray-300    p-2  rounded-xl">
          <span  >
              <button id="dropdownDividerButton"
                data-dropdown-toggle="dropdownDivider1" className="font-medium rounded-lg text-sm  text-center text-white text-lg inline-flex items-center font-bold " type="button">LEAGUE : <span className="bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent">Frisky Ducks</span><svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
              <div id="dropdownDivider1" className="hidden absolute z-20 w-32 ml-2 text-center bg-white max-w-40  rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownDividerButton">
                  <li> <button 
                    className="inline py-2 px-4 uppercase">players</button>
                  </li>
                  <li>
                    <button 
                      className="inline py-2 px-4 uppercase ">teams</button>
                  </li>
    
                </ul>
              </div></span>   </div>
              <button onClick={closeTrade} className="absolute top-1  right-[12vw] inline-flex items-center" 
><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF9429" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button>

        <div className="col-start-1 col-end-6  row-start-4 row-end-7  text-gray-300  p-2 text-center  rounded-xl">
    
          <div className="grid grid-flow-row grid-cols-6  space-x-3 space-y-1 px-3 py-1">
         <p></p>
            <p>ACQUIRE</p>
            <p></p>
            <p>RELEASE</p>
            <p></p>
            <p>CASH</p> 
          </div>
    
              {
                Array.from(Array(numberOfTrades).keys()).map((trade) => {
                  return <TradeLine key={trade} showingAcquire={showingAcquire} showingRelease={showingRelease}  />
                 })
            }
    
    
        </div>
      
          </div>
          <div className="w-48 mx-auto">  <button onClick={() => {
             setNumberOfTrades(numberOfTrades + 1)
          }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF9429" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg></button></div>
        </div></div> 
     
 )
}

export default TradeMaker
