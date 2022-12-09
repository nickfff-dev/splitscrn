import prisma from "../../lib/prisma";
import { useEffect, useState } from 'react';


import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'

import dayjs from "dayjs";
import UserProfile from "../../components/User/Profile";


const UserAccount = ({ owner, leagues,participants }: InferGetServerSidePropsType<typeof getServerSideProps>) => { 

  

  useEffect(() => { 

    if (owner.verificationCode === null || owner.verificationCode === "" || owner.emailVerified === false) {
      window.location.href = "/user/verify"
    }
  } ,[owner.verificationCode,owner.emailVerified])


  
 
  



  return (
    
      <UserProfile owner={owner} leagues={ leagues} participants={participants.flat(Infinity)}/>

    
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
    include: {
      Wallet: {
        include: {
          Deposit: true,
          Withdrawal: true

        }
      }
    }
  }).then((data) => {
    return data
  })
 
  const leagues = await prisma.league.findMany({
    where: {
      members: {
        some: {
          username: username
        }
      }

    },
    include: {
      members: {
        include: {
          Trade: true
        }
      }, 
      players: true,

    } 
  })
  const participants = leagues.map((league) => {
    return league.members.map((member) => {
      return member.username === username ? member : null
    })
  })

 console.log(leagues)
  return {
    props: {
      owner, leagues, participants
    }
  }
 
 }
  









export default UserAccount
