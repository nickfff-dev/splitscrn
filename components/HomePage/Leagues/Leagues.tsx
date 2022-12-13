import k from './Leagues.module.css';
import { useEffect, useState } from 'react';
import { Date } from '../../../types/Date';
import { Fixture } from '../../../types/Fixture';
import { Spinner } from '../../ui';
import { Button } from '../../ui';
import { useSession, signIn, signOut } from 'next-auth/react';
import clsx from 'clsx';
import FantasyTab from './FantasyTab';
import OpenLeagues from './OpenLeagues';

const Leagues = () => {

  const { data: session } = useSession();
 
  const [leagues, setLeagues] = useState<any>([]);
  const [userLeagues, setUserLeagues] = useState<any>([]);



  const getUserLeagues = async () => { 
    const res = await fetch(`/api/leagues/${session?.user?.name}`);
    const data = await res.json();
    
    setLeagues(data);
    
  const myleagues =data.filter((league: any) => {
      return league.members.find((member: any) => {
        if (member.username === session?.user?.name) {
          return league;
        
       }
     })
  })
  setUserLeagues(myleagues);


    return data;
  }

  useEffect(() => {
getUserLeagues()
  });
 
  


  return (
    <>
      {
        session ? (    <div className={`${k.root}`}>  
          <h1 className=" font-bold text-3xl uppercase">My Leagues</h1>
          <div className={`${k.resultsRow1}  font-semibold`}>  <span className="text-base ">GROUP</span>  <span className="text-base">REGION</span> <span className="text-base">STANDING</span> <span className="text-base">SCORE</span> <button className="invisible outline outline-[#ff921b]  rounded-xl " >View</button></div>
        <div className={`${k.root, k.resultsContainer} h-[300px] overflow-y-scroll [&>*:nth-child(odd)]:bg-gray-medium [&>*:nth-child(even)]:bg-gray-light`}>
          
          
          {userLeagues.length > 0 ? userLeagues.map((league: any) => { 
            return league.members.map((participant: any, index:number) => { 
              return <FantasyTab key={ index} league={league} participant={participant} />
            })
          }
            )
          : <p className="w-24 h-24 mx-auto mt-5 text-white">JOin a league</p>}
          </div>
          <div className={`${k.root}`}>  
            <h1 className=" font-bold text-3xl uppercase">Open Leagues</h1>
            <div className={`${k.resultsRow1}  font-semibold`}>  <span className="text-base">PRIZE</span>  <span className="text-base">REGION</span> <span className="text-base">FEE</span> <span className="text-base">DURATION</span> <button className="invisible outline outline-[#ff921b]  rounded-xl " >View</button></div>
        <div className={`${k.root, k.resultsContainer} h-[300px] overflow-y-scroll [&>*:nth-child(odd)]:bg-gray-medium [&>*:nth-child(even)]:bg-gray-light`}>
          
         
          {leagues.length > 0 ? leagues.map((league: any, index:number) => { 
             const prize =  league.members.length * league.buyInFee
            return <OpenLeagues key={index} league={league} prize={prize? prize :league.buyInFee} />
            
          }
            )
          : <div className="w-24 h-24 mx-auto mt-5"><Spinner /></div>}
          </div>
  
      </div>
      </div>) : (<div className={`${k.root}`}>  
        <h1 className=" font-bold text-3xl uppercase">Open Leagues</h1>
        <div className={`${k.root, k.resultsContainer} h-[300px] overflow-y-scroll`}>
          
          <div className={`${k.resultsRow1}  font-semibold`}>  <span className="text-base">PRIZE</span>  <span className="text-base">REGION</span> <span className="text-base">FEE</span> <span className="text-base">DURATION</span> <button className="invisible outline outline-[#ff921b]  rounded-xl " >View</button></div>
          {leagues.length > 0 ? leagues.map((league: any, index:number) => { 
             const prize = 100
              return <OpenLeagues key={index} league={league} prize={prize} />
            
          }
            )
          : <div className="w-24 h-24 mx-auto mt-5"><Spinner /></div>}
          </div>
  
      </div>)
    }
    </>
  );
};

export default Leagues;
