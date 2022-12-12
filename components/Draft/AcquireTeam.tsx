

const AcquireTeam = ({team,fetchTeam,closeAcquire}:{team:any,fetchTeam:any,closeAcquire:any}) => {
  return (        <div className="grid grid-flow-row grid-cols-8 auto-rows-auto mt-2 space-x-3 bg-gray-light px-3 py-1 rounded-full">
      
  <p className="my-auto">{team?.name.split(" ")[0]}</p>
  <p  className="my-auto">{team?.top.split(" ")[0]}</p>
  <p  className="my-auto">{team?.jungle.split(" ")[0]}</p>

      <p className="my-auto">{team?.mid.split(" ")[0]}</p> 
      <p className="my-auto">{team?.adc.split(" ")[0]}</p>
      <p>|</p> 
      <p className="my-auto">{team?.support.split(" ")[0]}</p>
    <div className="w-48 mx-auto">  <button onClick={() => {
      fetchTeam(team)
      closeAcquire()
    }}  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF9429" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button></div> 
  </div>)
}


export default AcquireTeam
