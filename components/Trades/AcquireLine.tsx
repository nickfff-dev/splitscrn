

const AcquireLine = ({player,onPlayer1,closeAcquire}:{player:any,onPlayer1:any,closeAcquire:any}) => {
  return (        <div className="grid grid-flow-row grid-cols-8 auto-rows-auto mt-2 space-x-3 bg-gray-light px-3 py-1 rounded-full">
      
  <p className="my-auto">{player?.name.split(" ")[0]}</p>
  <p  className="my-auto">{player?.region}</p>
  <p  className="my-auto">{player?.team.split(" ")[0]}</p>

      <p className="my-auto">{player?.position}</p> 
      <p className="my-auto">$500,000</p>
      <p>|</p> 
      <p className="my-auto">{player?.points ? player.points.toFixed(2) : (0).toFixed(2)}</p>
    <div className="w-48 mx-auto">  <button onClick={() => {
      onPlayer1(player)
      closeAcquire()
    }}  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF9429" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button></div> 
  </div>)
}


export default AcquireLine
