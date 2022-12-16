import type { NextApiRequest, NextApiResponse } from 'next';
import { league, participant, fixture } from '@prisma/client';
import prisma from '../../../lib/prisma';




export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) { 



  
  try {
    
     const leagues= await prisma.league.findMany({
 
     })
    const participants = await prisma.participant.findMany({})
    const fixtures = await prisma.fixture.findMany({})
    if (leagues) {
      let data: any = []
  
        leagues.map(async(league: league, index:number) => {
          data.push({ league: league, fixtures: [], members: [] })
           participants.map((member: any) => {
            if (member.leagueId === league.id) {
              data[index].members.push(member)
            }
          })
          return fixtures.map((fixture: any) => {
            if (fixture.leagueId === league.id) {
              data[index].fixtures.push(fixture)
            }
          })
          
        })
     
      res.send(JSON.stringify(data))
      }
    } catch (e) {
      res.send(JSON.stringify("error"));
    }
 
  



}
  
