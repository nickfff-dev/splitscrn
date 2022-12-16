import k from './Leagues.module.css';
import { useEffect, useState } from 'react';
import { Date } from '@customTypes/Date';
import { Fixture } from '@customTypes/Fixture';
import { Spinner } from '@components/ui';
import { Button } from '../../ui';
import { useSession, signIn, signOut } from 'next-auth/react';
import clsx from 'clsx';
import FantasyTab from './FantasyTab';
import OpenLeagues from './OpenLeagues';

const Leagues = () => {

  const { data: session } = useSession();
 
  const [leagues, setLeagues] = useState<any>([]);
  const [userLeagues, setUserLeagues] = useState<any>([]);
  const [fixtures, setFxtures] = useState<any>([])
  useEffect(() => {
    
    
      getUserLeagues()
   

})
  const getUserLeagues = async () => { 
    const res = await fetch(`/api/leagues/${session?.user?.name}`);
    const data = await res.json();
    
    setLeagues(data);
    
    const myleagues :any =[]
  data.map((league: any, index:any) => {
     let matche =  league.members.some((member: any) => 
         member.username === session?.user?.name
          
        
        
       
     )
    if (matche === true) {
      myleagues.push(data[index])
    }
  })
  setUserLeagues(myleagues);


    return data;
  }


;
 
  


  return (
    <>
      {
        session ? (    <div className={`${k.root}`}>  
          <h1 className=" font-bold text-3xl uppercase">My Leagues</h1>
          <div className={`${k.resultsRow1}  font-semibold`}>  <span className="text-base ">GROUP</span>  <span className="text-base">REGION</span> <span className="text-base">STANDING</span> <span className="text-base">SCORE</span> <button className="invisible outline outline-[#ff921b]  rounded-xl " >View</button></div>
        <div className={`${k.root, k.resultsContainer} h-[300px] overflow-y-scroll [&>*:nth-child(odd)]:bg-gray-medium [&>*:nth-child(even)]:bg-gray-light`}>
          
          
          {userLeagues ? userLeagues.map((league: any) => { 
            return league.members.map((participant: any, index:number) => { 
              return <FantasyTab key={ index} league={league} participant={participant} fixtures={league.fixtures} />
            })
          }
            )
          : <p className=" mx-auto mt-5 text-white">JOin a league</p>}
          </div>
          <div className={`${k.root}`}>  
            <h1 className=" font-bold text-3xl uppercase">Open Leagues</h1>
            <div className={`${k.resultsRow1}  font-semibold`}>  <span className="text-base">PRIZE</span>  <span className="text-base">REGION</span> <span className="text-base">FEE</span> <span className="text-base">DURATION</span> <button className="invisible outline outline-[#ff921b]  rounded-xl " >View</button></div>
        <div className={`${k.root, k.resultsContainer} h-[300px] overflow-y-scroll [&>*:nth-child(odd)]:bg-gray-medium [&>*:nth-child(even)]:bg-gray-light`}>
          
         
          {leagues ? leagues.map((league: any, index:number) => { 
             const prize =  league['members'].length * league['league'].buyInFee
            return <OpenLeagues key={index} league={league} prize={prize? prize :league.league.buyInFee} />
            
          }
            )
          : <div className="w-24 h-24 mx-auto mt-5"><Spinner /></div>}
          </div>
  
      </div>
      </div>) : (<div className={`${k.root}`}>  
        <h1 className=" font-bold text-3xl uppercase">Open Leagues</h1>
        <div className={`${k.root, k.resultsContainer} h-[300px] overflow-y-scroll`}>
          
          <div className={`${k.resultsRow1}  font-semibold`}>  <span className="text-base">PRIZE</span>  <span className="text-base">REGION</span> <span className="text-base">FEE</span> <span className="text-base">DURATION</span> <button className="invisible outline outline-[#ff921b]  rounded-xl " >View</button></div>
          {leagues?.map((league: any, index:number) => { 
              const prize =  league['members'].length * league['league'].buyInFee
              return <OpenLeagues key={index} league={league ? league : null} prize={prize} />
            
          }
            )
          }
          </div>
  
      </div>)
    }
    </>
  );
};

export default Leagues;
