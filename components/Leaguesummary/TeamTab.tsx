import L from './Leaguesummary.module.css';
import { useState, useEffect } from 'react'
import ResultDetail from '../PlayerResult/ResultDetail';



const TeamTab = ({ league, participant, wallets, position, fixtures }: { league: any, participant: any, wallets: any, position: any, fixtures:any }) => { 
 const [showModal, setShowModal] = useState(false)
  const [results, setResults] = useState<any>([])
  const closeModal = () => {
    setShowModal(false)
  }
  const getResults =  () => {
    try {     const mavitu =  fetch(`http://localhost:3000/api/populate-fantasy/${league.name}/`, {
      method: 'POST',
      body: JSON.stringify({
        fantasyname: participant.fantasyname,
      }),
    }).then((res) =>
      res.json().then((data) => { 
        return JSON.parse(data)
      }))
    
      return mavitu
    } catch (e: any) {
  console.log(e)
}
  }
  const updateData = () => {
  try{  getResults()?.then((data) => {
    setResults(data)
  })}catch(e){console.log(e)}
  }

  useEffect(() => {
    
      updateData()
console.log(results)

      
  },[])
  return (
    <>
     
    <div className={`${L.resultsRow} h-10`}>
        <span className="text-sm">{position? position: ""}</span>  <span className="text-sm">{participant? participant.fantasyname: ""}</span> <span className="text-sm">{ participant? participant.points: 0}</span> <span className="text-sm">${ wallets && wallets.filter((wallet:any) => wallet.userId === participant.userId).map((wallet:any) => Intl.NumberFormat('en-US').format(wallet.credits))
        }</span> <button onClick={() => {
          setShowModal(!showModal)
          }} className="outline outline-1 outline-[#ff921b] px-3 text-sm text-sm rounded-xl capitalize bg-gray-dark" >View</button></div>
      
      {
        showModal ? (<ResultDetail league={league} participant={participant} results={results} fixtures={fixtures} closeModal={ closeModal} />) : null
      }
    </>
  
  )

}


export default TeamTab;
