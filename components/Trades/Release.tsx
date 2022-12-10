import { useState,useEffect } from "react"
import ReleaseLine from "./ReleaseLine"
const Release = ({closeRelease,players,activeParticipant,onPlayer2}:{closeRelease:any, players:any,activeParticipant:any,onPlayer2:any}) => {
  
 
  const [freeAgentFilter, setFreeAgentFilter] = useState("OWNED")
  const [rolesFilter, setRolesFilter] = useState("Top")

 
 
  const [showModal, setShowModal] = useState(false)
  const showDropwdwn = () => { 
    setShowModal(!showModal)
  }

  const [showModal2, setShowModal2] = useState(false)
  const showDropwdwn2 = () => { 
    setShowModal2(!showModal2)
  }

  return (
    
    <div className="bg-gradient-to-r from-primary to-secondary p-[2px] rounded-[16px] max-w-[1100px] w-full mx-auto">
    <div className="bg-gray-dark rounded-xl py-7 pl-20 ">
      <div className="grid grid-flow-row grid-cols-8 auto-rows-auto items-center  space-x-3 ">
        
      <div className="col-start-2 col-end-4 row-start-1 row-end-2  text-gray-300     rounded-xl">
      <span >
          <button id="dropdownDividerButton" onClick={showDropwdwn}
            data-dropdown-toggle="dropdownDivider1" className="font-medium rounded-lg text-sm  text-center text-white text-lg inline-flex items-center font-bold uppercase" type="button">FREE : <span>{freeAgentFilter}</span><svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
          <div id="dropdownDivider1" className={`${showModal ? "block": "hidden"} absolute z-20 w-32 ml-2 text-center bg-white max-w-40  rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
            <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownDividerButton">
                  <li> <button onClick={() => {
                   setFreeAgentFilter("FREEAGENT")
                    showDropwdwn()
                
              }}
                className="inline py-2 px-4 uppercase">Freeagent</button>
              </li>
              <li>
                    <button onClick={() => {
                      setFreeAgentFilter("OWNED")
                      showDropwdwn()
                    }}
                  className="inline py-2 px-4 uppercase ">owned</button>
              </li>

            </ul>
          </div></span>  </div>
            <div className="col-start-4 col-end-6 row-start-1 row-end-2  text-gray-300    p-2  rounded-xl">
            <span>
          <button id="dropdownDividerButton"  onClick={showDropwdwn2}
            data-dropdown-toggle="dropdownDivider1" className="font-medium rounded-lg text-sm  text-center text-white text-lg inline-flex items-center font-bold uppercase" type="button">ROLE : <span>{rolesFilter}</span><svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
          <div id="dropdownDivider1" className={`${showModal2 ? "block": "hidden"} absolute z-20 w-32 ml-2 text-center bg-white max-w-40  rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
            <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownDividerButton">
                  <li> <button onClick={() => {
                    setRolesFilter("Top")
                      showDropwdwn2()
              }}
                className="inline py-2 px-4 uppercase">Top</button>
              </li>
              <li>
                <button onClick={() => {
                    setRolesFilter("Jungle")
                      showDropwdwn2()
              }} 
                  className="inline py-2 px-4 uppercase ">Jungle</button>
                  </li>
                  <li>
                <button  onClick={() => {
                    setRolesFilter("Mid")
                      showDropwdwn2()
              }}
                  className="inline py-2 px-4 uppercase ">Mid</button>
                  </li>
                  <li>
                <button  onClick={() => {
                    setRolesFilter("Support")
                      showDropwdwn2()
              }}
                  className="inline py-2 px-4 uppercase ">Support</button>
                  </li>
                  <li>
                <button  onClick={() => {
                    setRolesFilter("Bot")
                      showDropwdwn2()
              }}
                  className="inline py-2 px-4 uppercase ">Bot</button>
              </li>


            </ul>
          </div></span>
          </div>
          <button onClick={closeRelease} className="absolute top-1  right-[9vw] inline-flex items-center" 
><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF9429" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button>
      <div className="col-start-6 col-end-8 row-start-1 row-end-2  text-gray-300     ">
      <input className="text-left rounded-full bg-gray-light border px-2 border-gray-light h-8  w-full" placeholder="Search...."/> </div>

        <div className="col-start-1 col-end-8  row-start-4 row-end-7  text-gray-300  p-2 text-center rounded-xl bo">
          
          <div className="grid grid-flow-row grid-cols-8  space-x-3 space-y-1 px-3 py-1 border mb-6">
          <p>NAME</p>
        <p>ROLE</p>
        <p>TEAM</p>
      <p>REGION</p>
              <p>POINTS</p>
              <p>PRICE</p> 
              <p>OWNER</p> 
              
            <p></p>
          
         

          </div>
            {
              players.filter((plays: any) => {
                if (freeAgentFilter === "FREEAGENT") {
                  return  plays.selected === false  && plays.position === rolesFilter
                } else if (freeAgentFilter === "OWNED" && (plays.name === activeParticipant.top || plays.name === activeParticipant.jungle || plays.name === activeParticipant.mid || plays.name === activeParticipant.adc || plays.name === activeParticipant.support)) {
                  return   plays.selected === true  
                  
                }
              }).map((player: any, index:number) => {
                return <ReleaseLine key={index} player={player} onPlayer2={onPlayer2} closeRelease={closeRelease} />
            })
}
      </div>
      </div>
      
    </div>
  </div>
  
  )
}








export default Release
