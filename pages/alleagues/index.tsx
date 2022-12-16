import prisma from "../../lib/prisma";
import { useEffect, useState } from 'react';
import { Grid } from '../../components/ui';


import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'
import AllLeagues from "@components/All-leagues/AllLeagues";


const AllOpenLeagues = ({ leagues }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  
 
  return (
    <div>
          <div  className="text-gray-300">
   
      {leagues ? <AllLeagues leagues={leagues}  /> : <p>No Leagues to display</p>}
      </div>
      </div>
  )
 }












export const getServerSideProps: GetServerSideProps = async (context) => { 


  const leaguedata = await prisma.league.findMany({
  

  }).then(async (leagues) => {
    await prisma.$disconnect()
    return leagues
   
  })

  const members = await prisma.participant.findMany({})
  const leagues: any[] = []
  

  leaguedata.map((league: any, index:number) => {
    leagues.push({ league: league, members: [] })
    members.map((member: any) => {
      if (member.leagueId === league.id) {
         leagues[index].members.push(member)
      }
    })
  })  



  return {
    props: { leagues }
  }
}















export default AllOpenLeagues

