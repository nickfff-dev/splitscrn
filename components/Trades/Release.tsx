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
        

      
          <button onClick={closeRelease} className="absolute top-1  right-[9vw] inline-flex items-center" 
><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF9429" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button>


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
                if (plays.selected === true && (plays.name === activeParticipant.top || plays.name === activeParticipant.jungle || plays.name === activeParticipant.mid || plays.name === activeParticipant.adc || plays.name === activeParticipant.support)) {
                  return  plays
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
