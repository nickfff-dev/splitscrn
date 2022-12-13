import Link from "next/link"
const AllLeagues = ({ leagues }: { leagues: any }) => {

  return (<div className="grid grid-cols-9 col-start-1 col-end-9 gap-3   grid-flow-row auto-rows-auto justify-items-center  bg-gray-medium ">
    <div className=" grid grid-flow-col gap-7 col-start-1 col-end-9 justify-items-center  row-start-1 row-end-3  px-5  bg-gray-light  ">
      <p>SortBy</p>
      <p>Fee</p>
      <p>Prize</p>
      <p>Region</p>  
      <p>DraftDate</p> 
      <p>Duration</p>  
      <p>Participants</p>

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
        leagues && leagues.map((league: any, index:number) => {
          return (<div key={index} className=" grid grid-flow-col  grid-cols-9 gap-5 col-start-1 col-end-9 justify-items-center  px-5  bg-gray-light py-1">
          <p>{league.name}</p>
      <p>{league.region}</p>
      <p>${league.buyInFee}</p>  
      <p>{league.prize}</p> 
      <p>{league.draftTime.split("T")[0]}</p>  
      <p>{league.duration}</p>
            <p>{ league.members.length}</p>  
      <p>|</p>
      <p><Link href={`/optin-league/${league.name}`}>Join</Link></p>
          </div>)
        })
      }

    </div>
  
   
  
  </div>)
}
export default AllLeagues
