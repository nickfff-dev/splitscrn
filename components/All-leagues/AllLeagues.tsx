import Link from "next/link"
import { faCoins, faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AllLeagues = ({ leagues }: { leagues: any }) => {
  const [leagueData, setLeagueData] = useState(leagues)
  const filters = ["buyInFee", "prize", "region", "draftTime", "duration", "members"]
  const [filter, setFilters] = useState("")
  const [direction, setDirection] = useState("")
  const filterRunner = () => {
    if (filter === "duration" && direction === "up") {
      leagues.sort((a: any, b: any) => a.duration - b.duration)
      setLeagueData(leagues)
      setFilters("")
      setDirection("")
    } else if (filter === "duration" && direction === "down") {
      leagues.sort((a: any, b: any) => b.duration - a.duration)
      setLeagueData(leagues)
      setFilters("")
      setDirection("")
    } else if (filter === "participants" && direction === "up") {
      leagues.sort((a: any, b: any) => a.members.length - b.members.length)
      setLeagueData(leagues)
      setFilters("")
      setDirection("")
    } 
    else if (filter === "participants" && direction === "down") {
      leagues.sort((a: any, b: any) => b.members.length - a.members.length)
      setLeagueData(leagues)
      setFilters("")
      setDirection("")
    } else if (filter === "prize" && direction === "down") {
      leagues.sort((a: any, b: any) => ((b.members.length * b.buyInFee) - (a.members.length * a.buyInFee)))
      setLeagueData(leagues)
      setFilters("")
      setDirection("")
    }
    else if (filter === "prize" && direction === "up") {
      leagues.sort((a: any, b: any) => ((a.members.length * a.buyInFee) - (b.members.length * b.buyInFee)))
      setLeagueData(leagues)
      setFilters("")
      setDirection("")
    }else if (filter === "buyInFee" && direction === "down") {
     leagues.sort((a: any, b: any) => (a.buyInFee - b.buyInFee))
      setLeagueData(leagues)
      setFilters("")
      setDirection("")
    }
    else if (filter === "buyInFee" && direction === "up") {
      leagues.sort((a: any, b: any) => (b.buyInFee - a.buyInFee))
      setLeagueData(leagues)
      setFilters("")
      setDirection("")
    }
   
  
 }

  useEffect(() => {

    filterRunner()
    
  })
  




  return (<div className="grid grid-cols-9 col-start-1 col-end-9 gap-3   grid-flow-row auto-rows-auto justify-items-center  bg-gray-medium ">
    <div className=" grid grid-flow-col gap-7 col-start-1 col-end-9 justify-items-center  row-start-1 row-end-3  px-5  bg-gray-light  ">
      <p>SortBy</p>
      <span className="flex items-center"><span>Fee</span><FontAwesomeIcon icon={faUpLong} onClick={() => { setFilters("buyInFee"); setDirection("up") }} className="active:text-secondary focus:text-secondary text-sm"/><FontAwesomeIcon icon={faDownLong } onClick={()=>{setFilters("buyInFee"); setDirection("down")}} className="active:text-secondary focus:text-secondary text-sm"/> </span>
      <span className="flex items-center"><span>Prize</span><FontAwesomeIcon icon={faUpLong} onClick={ ()=>{setFilters("prize"); setDirection("up")}} className="active:text-secondary focus:text-secondary text-sm"/><FontAwesomeIcon icon={faDownLong } onClick= {()=>{setFilters("prize"); setDirection("down")}} className="active:text-secondary focus:text-secondary text-sm"/> </span>
      <span className="flex items-center"><span>Region</span><FontAwesomeIcon icon={faUpLong} onClick={ ()=>{setFilters("region"); setDirection("up")}} className="active:text-secondary focus:text-secondary text-sm"/><FontAwesomeIcon icon={faDownLong } onClick={()=>{setFilters("region"); setDirection("down")}} className="active:text-secondary focus:text-secondary text-sm"/> </span>
      <span className="flex items-center"><span>DraftDate</span><FontAwesomeIcon icon={faUpLong} onClick={ ()=>{setFilters("draftTime"); setDirection("up")}} className="active:text-secondary focus:text-secondary text-sm"/><FontAwesomeIcon icon={faDownLong } onClick={()=>{setFilters("draftTime"); setDirection("down")}} className="active:text-secondary focus:text-secondary text-sm"/> </span>
      <span className="flex items-center"><span>Duration</span><FontAwesomeIcon icon={faUpLong} onClick={ ()=>{setFilters("duration"); setDirection("up")}} className="active:text-secondary focus:text-secondary text-sm"/><FontAwesomeIcon icon={faDownLong } onClick={()=>{setFilters("duration"); setDirection("down")}} className="active:text-secondary focus:text-secondary text-sm"/> </span>
      <span className="flex items-center"><span>participants</span><FontAwesomeIcon icon={faUpLong} onClick={ ()=>{setFilters("participants"); setDirection("up")}} className="active:text-secondary focus:text-secondary text-sm"/><FontAwesomeIcon icon={faDownLong } onClick={()=>{setFilters("participants"); setDirection("down")}} className="active:text-secondary focus:text-secondary text-sm"/> </span>

    </div>

    <div className=" col-start-1 col-end-9 justify-items-center grid-cols-9 grid-flow-row  auto-rows-auto space-y-2 border p-2">
    <div className=" col-start-1 col-end-9 grid grid-flow-col justify-items-center grid-cols-9 gap-5 border px-5">     
      <p>Name</p>
      <p>Region</p>  
      <p>Fee</p> 
      <p>Prize</p>  
      <p>DraftTime</p>
      <p>Duration</p>  
      <p>Participants</p> 
      <p></p>
      <p>Join</p>
    </div>
      {
        leagueData ?  (leagueData as any).map((league: any, index:number) => {
          return (<div key={index} className=" grid grid-flow-col  grid-cols-9 gap-5 col-start-1 col-end-9 justify-items-center  px-5  bg-gray-light py-1">
          <p>{league.name}</p>
      <p>{league.region}</p>
      <p>${league.buyIn ? league.buyInFee : "FREE"}</p>  
            <p>{league.buyIn ?  (league.buyInFee * league.members.length) - 100 : "FREE"}</p> 
      <p>{league.draftTime.split("T")[0]}</p>  
      <p>{league.duration}</p>
            <p>{ league.members.length}</p>  
      <p>|</p>
      <p><Link href={`/optin-league/${league.name}`}>Join</Link></p>
          </div>)
        }) : null
      }

    </div>
  
   
  
  </div>)
}
export default AllLeagues
