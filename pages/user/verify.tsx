import prisma from "@lib/prisma";
import { useEffect, useState } from 'react';
import { Grid } from '@components/ui';

import dayjs from "dayjs";
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router';

import Verify from "@components/Login/Verify"


const VerifyUser = ({ owner }: InferGetServerSidePropsType<typeof getServerSideProps>) => {


  return (
<Verify owner ={owner}/>
  
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

  const owner = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
      
    }
  }).then((data) => {
    return data
  })
 

  return {
    props: {
      owner
    }
  }
 
 }


export default VerifyUser
