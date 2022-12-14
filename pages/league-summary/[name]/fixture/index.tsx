import prisma from "../../../../lib/prisma";
import { useEffect, useState } from 'react';
import { Grid } from '../../../../components/ui';


import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { useSession, signIn, signOut, getSession } from 'next-auth/react';



const Fixtureview = ({ fixture, results }: { fixture: any, results: any }) => { 


  return (
    <Grid>
      
      <div style={{color:"white"}}>
      <h1>Fixture</h1>
      {
        fixture.map((fixture: any) => { 
          return (
            <div key={fixture.id}>
          
              <h1 style={{textAlign:"center"}}>league: {fixture.MatchId}
                
              </h1>
              <div style={{display:"flex", flexDirection:"row",width: "1500px"}} >
              {
                results.filter((result: any) => {
                  
                  // remove the last underscore and everything after it then compre with fixture MatchId
                  const resultMatchId = result.game.split("_").slice(0, -1).join("_")
                  return resultMatchId === fixture.MatchId
                }).map((result: any) => {
                  return (
                    <div  key={result.id} >
                      <p>{result.team1} vs { result.team2}</p>
                      <p > {result.game.split("_").slice(1).join("_")}</p>
                      
                      
                 
                      <p>player: {result.name}</p>
                      <p>team: {result.team}</p>
                      <p>kills: {result.kills}</p>
                      <p>deaths: {result.deaths}</p>
                      <p>assits: {result.assists}</p>
                      <p>visionscore: {result.visionScore}</p>
                      <p>creepScore: {result.creepScore}</p>
                      <p>teamKills: {result.teamTotalKills}</p>
                      <p>points: {result.points}</p>
                    </div>
                  )
                 })
              }
          </div>
              <br/>
              </div> )
        })
      }
    </div>
    </Grid>
  )
}



















export const getServerSideProps: GetServerSideProps = async (context) => { 

  const leaguename = context.params?.name



  const league = await prisma.league.findUnique({
    where: {
      name: leaguename as string
    },


    
  })

  const fixtures = await prisma.fixture.findMany({
    where: {
      leagueId:league?.id
    },
    orderBy: {
      MatchId: "asc"
    }
  }).then(async (data) => {
    await prisma.$disconnect()
    return data
  })

  const results = await prisma.playerresult.findMany({
    where: {
      leagueId: league?.id
    },
    orderBy: {
      game: "asc"
    }
  }).then(async (data) => {
    await prisma.$disconnect()
    return data
  })


  return {
    props: {
      fixture: fixtures,
      results: results
    }
  }


 
}



export default Fixtureview
