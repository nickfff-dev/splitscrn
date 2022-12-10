import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../lib/prisma';
import dayjs from 'dayjs';


export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {


  const  tradesdata =  JSON.parse(req.body);
  const fantasyname =  req.query.fantasyname
  console.log(tradesdata);
 
  const regTrade = async (trade: any) => {
   const therole = trade.tradeRole === "Bot" ? "adc" : trade.tradeRole.charAt(0).toLowerCase() + trade.tradeRole.slice(1)
    try {
      await prisma.trade.create({
    data: {
      playerIn: trade.playerIn,
      playerOut: trade.playerOut,
      participant: {
        connect: {
          id: trade.participantId
        }
      },
      date: dayjs(new Date()).toDate().toISOString(),
    leagueId: trade.leagueId
    }
  }).then(async () => {
    await prisma.league.update({
      where: {
        id: trade.leagueId
      },
      data: {
        members: {
          update: {
            where: {
              id: trade.participantId
            },
            data: {
              [therole]: trade.playerIn
            }
          }
        },
        players: {
          update: [
            {
              where: {
                name_leagueId: {
                  name: trade.playerOut,
                  leagueId: trade.leagueId
                }
              },
              data: {
                selected: false,
                selectedBy: null
              }
            },
            {
              where: {
                name_leagueId: {
                  name: trade.playerIn,
                  leagueId: trade.leagueId
                }
              },
              data: {
                selected: true,
                selectedBy: fantasyname as string
              }
            }
          ]
        }
  
        
      }
    }).then(async () => {
       
    
        await prisma.$disconnect();
        
     
    })
  }).then(async () => {
    await prisma.playerResult.deleteMany({
      where: {
        participantId: trade.participantId,
        name: trade.playerOut
      }
      
    }).then(async () => {
       
    
      await prisma.$disconnect();
    })
    
  })
  
  } catch (e) {
    
   
    console.log(e)
  }
  
 }



  
  if (tradesdata) {
    try {
      tradesdata.trades.map(async(trade: any) => {
       await regTrade(trade)
      })

      let fullAmount = tradesdata.trades.reduce((a: number, b: any) => a + b.credits, 0)
      await prisma.wallet.update({
         where: {
             userId: tradesdata.userId
         },
         data: {
           credits: {
             increment: fullAmount
           }
         }
       }).then(async () => {
          
       
         await prisma.$disconnect();
         
      
     })
          res.send("success")
    } catch (e) {
      console.log(e)
    }
  }

  
}
