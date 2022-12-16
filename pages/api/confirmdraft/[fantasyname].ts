import type { NextApiRequest, NextApiResponse } from 'next';


import {League} from "../../../lib/league"
import prisma from '../../../lib/prisma';
import cargo from '../../../lib/cargo';
import{calculateLeagueDuration} from "../../../lib/calculate"
import dayjs from 'dayjs';

import { getCurrentGames, getCurrentTeams, getPrivateLeagueTeams, getPrivateLeagueMatches, getPrivateLeaguePlayers,getPrivateLeagueResults,getLeagueFixture } from '../../../lib/cargoQueries';





export default async function handler(req: NextApiRequest, res: NextApiResponse<League |  string>) { 
 
    

  const fantasyname = req.query.fantasyname as string

  try {
    await prisma.participant.update({
      where: {
        fantasyname: fantasyname
      },
      data: {
        confirmedAttendance: true
      }
    }).then(async () => { 

      await prisma.$disconnect()
     
    })


    res.status(200).send("success")
       
    
    

    


     
    
  }catch(error: any){
    console.log(error)
  }


      
    
    

    
  
  
}
