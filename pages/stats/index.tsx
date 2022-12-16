import prisma from "@lib/prisma";
import { GetServerSideProps } from 'next'
import Stats from "@components/Stats/Stats";
import { InferGetServerSidePropsType } from 'next'

const StatsPage = ({statistics}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (<div>
  
  <Stats statistics={statistics}/>
  
  </div>)
}




export const getServerSideProps: GetServerSideProps = async (context) => {
  const playerResult = await prisma.playerresult.findMany({

  })
  const teamResult = await prisma.teamresult.findMany({

  })

  const leagues  = await prisma.league.findMany({})
  
  return {
    props: {
      statistics:{playerResult, teamResult, leagues}
    }
  }
 }

export default StatsPage
