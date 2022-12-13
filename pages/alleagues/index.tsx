import prisma from "../../lib/prisma";
import { useEffect, useState } from 'react';
import { Grid } from '../../components/ui';
import { Fixture, Teams, League, Players } from "@prisma/client"

import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'
import AllLeagues from "@components/All-leagues/AllLeagues";


const AllOpenLeagues = ({ leagues }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  
 
  return (
    <div>
          <div  className="text-gray-300">
   
      <AllLeagues leagues={leagues} />
      </div>
      </div>
  )
 }












export const getServerSideProps: GetServerSideProps = async (context) => { 


  const leagues = await prisma.league.findMany({

    include: {
      members: true,
    }
  }).then(async (leagues) => {
    await prisma.$disconnect()
    return leagues
   
  })
  return {
    props: { leagues }
  }
}















export default AllOpenLeagues

