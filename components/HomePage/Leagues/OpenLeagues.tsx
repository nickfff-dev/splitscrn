import k from './Leagues.module.css';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const OpenLeagues = ({ league, prize }: { league: any, prize: any }) => { 

  return (

    <div className={`${k.resultsRow} h-10`}>
      <span className="text-sm flex items-center space-x-2 "><span className=" bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{Intl.NumberFormat('en-US').format(prize)}</span><FontAwesomeIcon icon={ faCoins} className="text-secondary" /></span>  <span className="text-sm">{league.league.region}</span> <span className="text-sm flex space-x-2 items-center"><span className=" bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{Intl.NumberFormat('en-US').format(league.league.buyInFee)}</span><FontAwesomeIcon icon={ faCoins} className="text-secondary" /></span> <span className="text-sm">{Math.ceil(league.league.duration / 7) + ' weeks'}</span> <a href={`/league-summary/${league.league.name}/`} className="outline outline-[#ff921b] outline-1 text-sm bg-gray-dark px-3 rounded-xl capitalize" >View</a></div>)

}


export default OpenLeagues;
