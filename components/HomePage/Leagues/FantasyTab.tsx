import k from './Leagues.module.css';
import { useEffect, useState } from 'react';
import ResultDetail from '../../PlayerResult/ResultDetail';




const FantasyTab = ({ league, participant, fixtures }: { league: any, participant: any, fixtures:any }) => { 
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
    getResults()?.then((data) => {
      setResults(data)
    })
  }

  useEffect(() => {
    
      updateData()
console.log(results)

      
  },[])
  return (
   <> 
    <div className={`${k.resultsRow} h-10`}>
        <span className="text-sm">{ participant && participant.fantasyname}</span>  <span className="text-sm">{league && league.league.region}</span> <span className="text-sm">{ league &&league.members.sort((a: any, b: any) => b.points - a.points).findIndex((member: any) => member.id === participant.id) + 1}</span> <span className="text-sm">{ participant && participant.points}</span> <button onClick={() => {
          setShowModal(!showModal)
        }} className="outline outline-[#ff921b] px-3 outline-1 text-sm rounded-xl bg-gray-dark hover:outline-gray-300 capitalize" >View</button></div>
    
    {
        showModal ? (  results &&               <ResultDetail league={league} participant={participant} results={results} closeModal={ closeModal} fixtures={fixtures} />) : null
      }
    </>)

}


export default FantasyTab;
