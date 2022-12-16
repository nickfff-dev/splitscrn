// Components




import TeamTab from "./TeamTab";
import TradeTab from "./TradeTab"
import L from "./Leaguesummary.module.css"


const LeagueSummary = ({ league, wallets, trades, members, fixtures}: { league: any ,wallets:any, trades:any, members:any, fixtures:any  }) => {


  return (
<div className={`${L.outerGrid}`}>
 <div className={`${L.root}`}>  
        <h1 className=" font-bold text-3xl uppercase">Player standings</h1>
        <div className={`${L.root, L.resultsContainer} h-[300px]  [&>*:nth-child(odd):not(:first-child)]:bg-gray-medium [&>*:nth-child(even)]:bg-gray-light overflow-y-scroll`}>
          
          <div className={`${L.resultsRow1}  font-semibold`}>  <span className="text-sm">STANDING</span>  <span className="text-sm">OWNER</span> <span className="text-sm">SCORE</span> <span className="text-sm">BANK</span> <button className="invisible outline outline-[#ff921b] text-sm rounded-xl" >View</button> </div>
          {league.members.sort((a: any, b: any) => b.points - a.points).map((member: any, index: number) => { 
          
              return (<TeamTab key={member.id} fixtures={fixtures} league={league} participant={member} wallets={wallets} position={index +1} />)
            
          }
            )
         }
          </div>
  
      </div>
      <div className={`${L.root}`}>  
        <h1 className="bigh font-bold text-3xl uppercase">Recent Trades</h1>
        <div className={`${L.resultsRow1}  font-semibold`}>  <span className="text-sm">PLAYER RELEASED</span>  <span className="text-sm">PLAYER ACQUIRED</span> <span className="text-sm">CASH RELEASED</span> <span className="text-sm">CASH ACQUIRED</span> <span className="text-sm">OWNER</span> </div>
        <div className={`${L.root, L.resultsContainer} h-[300px] overflow-y-scroll [&>*:nth-child(odd)]:bg-gray-medium [&>*:nth-child(even)]:bg-gray-light`}>
          {
            league.members.map((member: any) => {
             return trades.filter((trade: any) => {
                return trade.participantId = member.id
             }).map((trade: any) => {
                return (<TradeTab key={trade.id} trade={trade} owner={member.username} />)
              })
            })
           }
          
      
          </div>
  
      </div>  

      
    </div>
      
  )
 }


export default LeagueSummary;
