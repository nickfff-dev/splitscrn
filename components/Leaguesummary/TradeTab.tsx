import L from './Leaguesummary.module.css';
import { useEffect, useState } from 'react';



const TradeTab= ({trade, owner} : {trade: any, owner:string}) => { 
  return (
   
    <div className={`${L.resultsRow} h-10 `}>
        <span className="text-sm">{trade && trade.playerOut.split(" ")[0]}</span>  <span className="text-sm">{trade && trade.playerIn.split(" ")[0]}</span> <span className="text-sm">${Intl.NumberFormat('en-US').format(10000)}</span> <span className="text-sm">$500,000</span><span className="text-sm">{owner? owner : ""}</span> </div>)

}


export default TradeTab
