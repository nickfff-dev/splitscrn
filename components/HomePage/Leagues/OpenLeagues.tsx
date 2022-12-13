import k from './Leagues.module.css';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';


const OpenLeagues = ({ league, prize }: { league: any, prize: any }) => { 

  return (

    <div className={`${k.resultsRow} h-10`}>
        <span className="text-sm">${Intl.NumberFormat('en-US').format(prize)}</span>  <span className="text-sm">{league.region}</span> <span className="text-sm">${Intl.NumberFormat('en-US').format(league.buyInFee)}</span> <span className="text-sm">{Math.ceil(league.duration / 7) + ' weeks'}</span> <a href={`/league-summary/${league.name}/`} className="outline outline-[#ff921b] outline-1 text-sm bg-gray-dark px-3 rounded-xl capitalize" >View</a></div>)

}


export default OpenLeagues;
