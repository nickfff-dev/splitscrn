import prisma from "../../../lib/prisma";
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import L from "../../../components/Leaguesummary/Leaguesummary.module.css";
import TeamTab from "../../../components/Leaguesummary/TeamTab";
import TradeTab from "../../../components/Leaguesummary/TradeTab"
import LeagueSummary from "../../../components/Leaguesummary/League";



const LeaguePage = ({ league, wallets, trades, fixtures, members}: InferGetServerSidePropsType<typeof getServerSideProps>) => { 
    
  return (
    <LeagueSummary league={league} wallets={wallets} trades={ trades} members={members} fixtures={fixtures} />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => { 
  
  const name = context.params?.name

 
  const league = await prisma.league.findUnique({
    where: {
      name: name?.toString()
    },

  }).then(async (data) => {
 
    await prisma.$disconnect()
    return data
   
  })
  const members = await prisma.participant.findMany({
    where: {
      leagueId:league?.id
    }
  }).then(async (data) => {
    await prisma.$disconnect()
    return data

  })
  const wallets = await prisma.wallet.findMany({})
  await prisma.league.update({
    where: {
      name: name?.toString()
    },
    data: {
      points: members.map((member: any) => member.points).reduce((a: any, b: any) => a + b, 0),

    }
  })

  const trades = await prisma.trade.findMany({
    where: {
     leagueId:league?.id
   }
 }).then(async (data) => {
  await prisma.$disconnect()
  return data

 })
  const fixtures = await prisma.fixture.findMany({
    where: {
      leagueId:league?.id
    }
  }).then(async (data) => {
    await prisma.$disconnect()
    return data
  
   })
  return {
    props: {

      league, wallets, trades, fixtures, members

    

    }
  }
}

export default LeaguePage;
