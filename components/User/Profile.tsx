import Us from './profile.module.css'
import Image from 'next/image';
import TradeMaker from '@components/Trades/TradeMaker';
import Acquire from '@components/Trades/Acquire';
import { useState, useEffect } from 'react';
import Release from '@components/Trades/Release';

const UserProfile = ({owner, leagues, participants}:{owner:any,leagues:any, participants:any}) => {
  const [show, setShow] = useState(false)
  const [showAcquire, setShowAcquire] = useState(false)
  const [showRelease, setShowRelease] = useState(false)
  const [showTrade, setShowTrade] = useState(false)
  const [activeLeague, setActiveLeague] = useState(leagues[0].name)
  const onActiveLeague = (name: any) => {
    setActiveLeague(name)
    setActiveLeaguePlayers(getActiveLeaguePlayers())  
    
  }
  const getActiveLeaguePlayers = () => { 
    const activeLeaguePlayers = leagues.find((league:any) => league.name === activeLeague)
    return activeLeaguePlayers.players
  }
  const [activeLeaguePlayers, setActiveLeaguePlayers] = useState(getActiveLeaguePlayers())

  const showingTrade = () => { 
    setShowTrade(!showTrade)
  }
  const showDropwdwn = () => {
    setShow(!show)
     
   }
  const closeAcquire = () => { 
    setShowAcquire(false)
  }
  const closeRelease = () => { 
    setShowRelease(false)
  }
  const closeTrade = () => { 
    setShowTrade(false)
  }
 const showingAcquire = () => { 
    setShowAcquire(!showAcquire)
  }

  const showingRelease = () => { 
    setShowRelease(!showRelease)
  }
  return (
    <div className={`${Us.root}`}>
     
      <div className={`${Us.container} `}>

        <div className={`${Us.containerleft}`}>
        <h1>Profile</h1>
          <div className={`${Us.containerleftinner}`}>
            <img src="https://i.redd.it/rtqwmwm3tdy41.png" className="w-40 h-40" alt={''} />
             
            <div className={`${Us.containerleftinnertext} `}>
              <div className={`${Us.profiletext}`}><h2>Username:</h2> <p>{owner.name}</p></div>
              <div className={`${Us.profiletext}`}><h2>Email:</h2> <p>{owner.email}</p></div>
              <div className={`${Us.profiletext}`}><h2>Dob:</h2> <p>{ owner.birthDate.split(" ")[0]}</p></div>
              <div className={`${Us.profiletext}`}><h2>Locale:</h2> <p> {Intl.DateTimeFormat().resolvedOptions().timeZone}</p></div>
              <div className={` flex flex-row bg-gradient-to-r from-gray-200 to-  space-x-8 w-full p-2 font-bold`}><h2>Balance:</h2> <p>${Math.ceil(owner.Wallet[0].credits)}</p></div>
            </div>
            
          </div>
        
          <div>
          
            
     
            <div className={`${Us.containerleftinnertext2} `}>
            
            <div className={`${Us.profcard}`}><h2>Number of FantasyTeams:</h2> <p>{participants.length}</p></div>
            <div className={`${Us.profcard}`}><h2>Number of Leagues:</h2> <p>{leagues.length}</p></div>
            <div className={`${Us.profcard}`}><h2>Total points:</h2> <p>{
              participants.reduce((acc: any, item: any) => {
               return acc + item.points
             },0)
            }</p></div>
              <div className={`${Us.profcard}`}><h2>Prize Claims:</h2> <p>{leagues.length}</p></div>
              <div className={`${Us.profcard} invisible`}></div>
            </div>
          
            <div className=" flex flex-row mx-auto w-1/2 justify-center space-x-2 mt-5"> <button className=" rounded-full bg-gray-light px-3 mt-6  py-1 text-lg"><span className="capitalize bg-gradient-to-l from-primary via-secondary  to-[#f43d00] bg-clip-text font-bold text-transparent">New league</span></button><button className=" rounded-full  bg-gray-light px-3 mt-6  py-1 text-lg" onClick={() => {
              setShowTrade(!showTrade)
            }}><span className= "capitalize bg-gradient-to-l from-primary via-secondary  to-[#f43d00] bg-clip-text font-bold text-transparent">New Trade</span></button></div></div>
        </div>
        <div className={`${Us.containerRight} `}>
          <h1>Upcoming Drafts</h1>
          <div className={`${Us.H}`}>
            <h2>F.Name</h2>
            <h2>Leaguename</h2>

            <h2>Confirmation</h2>
            
            <h2>Link</h2>
            <h2>draftDate</h2>



          </div>
          <div className={`${Us.containerRightInner} `}>
           
            {
              participants.filter((participant: any) => {
                if (participant.confirmedAttendance === true) {
                  return participant
                }
         
              }).map((participant: any, index:number) => {
                return (
                  <div key={index} className={`${Us.H}`}>
                    <p>{participant.fantasyname}</p>
                    <p>{participant.draftName}</p>
                    <p><a href={`/draft/${participant.draftName}/${participant.fantasyname}/confirmdraft`}>Click</a></p>
                    <p><a href={`/draft/${participant.draftName}/${participant.fantasyname}/`}>draftLink</a></p>
                    <p>{
                      leagues.filter((league: any) => {
                        if (league.name === participant.draftName) {
                            return league
                          }
                      }).map((league: any) => {
                          return league.draftTime.split("T")[0]
                        })
                    }</p>
                  </div>
                )
              })
           }
   

          </div>

        </div>
        <div className={`${Us.containerRight2} `}>
          <h1>Transaction History</h1>
          <div className={`${Us.H}`}>
            <h2>Type</h2>
            <h2>date</h2>
            <h2>amount</h2>
            <h2>completed</h2>
            <h2>credits</h2>
          </div>
          <div className={`${Us.containerRightInner}  `}>

            {
              owner.Wallet[0].Deposit.map((depo: any, index:number) => {
                return (<div key={ index} className={`${Us.H}`}>
                  <p> deposit</p>
                
                  <p> {depo.date}</p> 
                  <p> ${depo.amount}.00</p> 
                  <p> true</p> 
                  <p> {depo.credits}</p> 
                </div>)
              })
            }
                   {
              owner.Wallet[0].Withdrawal.map((depo: any, index:number) => {
                return (<div key={index} className={`${Us.H}`}>
                  <p> deposit</p>
                
                  <p> {depo.date}</p> 
                  <p> ${depo.amount}.00</p> 
                  <p> true</p> 
                  <p> {depo.credits}</p> 
                </div>)
              })
                }

      
          </div>

        </div>
        <div className={`${Us.belowcontainerleft}`}>
          <h1>My Leagues</h1>
          <div className={`${Us.belowcontainerleftH}`}>
            <h2>LEAGUE</h2>
            <h2>REGION</h2>
            <h2>StartDate</h2>
                <h2>Owner</h2>
           
            <h2>Points</h2>
          </div>
          <div className={`${Us.belowcontainerleftInner} `}>
            {
              leagues.map((league: any, index:number) => {
                return (<div key={index} className={`${Us.H}`}>
                  
                  <p>{league.name}</p>
                  <p>{league.region}</p>
                  <p>{league.startDate.split("T")[0]}</p>
                  <p>{league.owner === owner.name ? "me": (owner.name)}</p>
                  <p>{ league.points}</p>
                </div>)
              })
             }
         
      
   
          </div>
        </div>
        <div className={`${Us.belowContainerRight}`}>
          <h1>My Trades</h1>
          <div className={`${Us.belowContainerRightH}`}>
        
            <h2>DATE</h2>
            <h2>PLAYERIN</h2>
            <h2>PLAYEROUT</h2>
            <h2>CREDITS</h2>
          </div>
          <div className={`${Us.belowContainerRightInner}`}>
          
              {
                participants.map((participant: any) => {
                  return participant.Trade?.map((trade: any, index:number) => {
                    return(<div key={index} className={`${Us.Htrade}`}> <p> {trade.date.split("T")[0]}</p>
<p> {trade.playerIn.split(" ")[0]}</p>
                    
                      <p> {trade.playerOut.split(" ")[0]}</p>
                
                    <p> $50000</p></div> )
                  })
                })
             }
              
             
           
            
          </div>
</div>
      </div>

    

      <div id="trademarker" className={`${showTrade ? "" : "hidden"}  absolute top-24 z-40 left-20 right-20 `}><TradeMaker onActiveLeague={onActiveLeague} activeLeague={activeLeague} closeTrade={closeTrade} showingAcquire={showingAcquire} showingRelease={showingRelease} leagues={leagues} /></div>
      <div id="acquire" className={`${showAcquire ? "": "hidden"} absolute top-24 z-40 left-20 right-20`}><Acquire closeAcquire={closeAcquire} players={activeLeaguePlayers} /></div>
      <div id ="release" className={`${showRelease ? "" : "hidden"} absolute top-24 z-40 left-20 right-20 `}><Release closeRelease={closeRelease} players={activeLeaguePlayers}/></div>

       
    

    </div>
  );
};


export default UserProfile;
