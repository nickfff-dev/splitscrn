import prisma from "../../lib/prisma";
import { useEffect, useState } from 'react';


import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'

import dayjs from "dayjs";
import UserProfile from "../../components/User/Profile";


const UserAccount = ({ owner, leagues,participants, wallet, deposit, withdrawal, trades, players, data }: InferGetServerSidePropsType<typeof getServerSideProps>) => { 

  

  useEffect(() => { 

    if (owner.verificationCode === null || owner.verificationCode === "" || owner.emailVerified === false) {
      window.location.href = "/user/verify"
    }
  } ,[owner.verificationCode,owner.emailVerified])


  
 
  



  return (
    
    <UserProfile owner={owner} data={data} wallet={wallet} deposit={deposit} withdrawal={withdrawal} />

    
  )
}





export const getServerSideProps: GetServerSideProps = async (context) => { 

  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }
  const username  = session?.user?.name as string
  const owner = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
      
      
    },

  }).then((data) => {
    return data
  })

  const wallet = await prisma.wallet.findUnique({
    where: {
      userId:owner?.id
    }
  })
  const deposit = await prisma.deposit.findMany({
    where: {
      userId:owner?.id
    }
  })
  const withdrawal = await prisma.withdrawal.findMany({
    where: {
      userId:owner?.id
    }
  })


// include wallet deposits and withdawal
 
  const allleagues = await prisma.league.findMany({ 
  })
  const allTrades = await prisma.trade.findMany({})
  const allplayers = await prisma.players.findMany({})
  const participants = await prisma.participant.findMany({
    where: {
      username: owner?.name as string
    }
  })

  let data: any []= []

  allleagues.map((league: any, index:number) => {
data.push({league:league, members: [], trades: [], players:[]})
    participants.map((member: any) => {
      if (member.leagueId === league.id) {
        data[index].members.push(member)
      }
      
    })
    allTrades.map((trade: any) => {
      if (trade.leagueId === league.id) {
        data[index].trades.push(trade)
      }
    })
    allplayers.map((player: any) => {
      if (player.leagueId === league.id) {
        data[index].players.push(player)
      }
    })
    
  })
  
 
  
 
      
  console.log("here",data[0].players.length)

  return {
    props: {
      owner, data : data, wallet, deposit, withdrawal
    }
  }
 
 }
  









export default UserAccount
