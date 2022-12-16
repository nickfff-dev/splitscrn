import prisma from "@lib/prisma";
import { useEffect, useState } from 'react';

import { withdrawal, deposit, wallet } from "@prisma/client"

import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'
import { DepositsPage } from "@components";
import {WithdrawPage} from "@components";




const UserWallet = ({ owner, wallet, withdrawals, deposits }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
 


  useEffect(() => { 

    if (owner.verificationCode === null || owner.verificationCode === "" || owner.emailVerified=== false) {
      window.location.href = "/user/verify"
    }
  } ,[owner.verificationCode,owner.emailVerified])
 
 
  

  return (<div  className="grid grid-cols-3 m-5 gap-3 grid-flow-row items-start justify-start">
  
    <div className="text-gray-300 col-start-1 col-end-2 row-start-1 row-end-3 h-auto bg-gray-medium rounded-xl  p-3 w-full" >
      
    <h1 className="text-xl  font-bold">Details</h1>

      <p className="font-bold ">Name : <span className="pl-4 text-sm"> {
        
        owner.name
      
      }</span></p>

    <p className="font-bold capitalize"> Balance: <span className="pl-2 text-sm">${
      wallet.balance.toFixed(2)
    }</span> </p>

      <p className="font-bold capitalize ">
        credits:
      <span className="pl-4 text-sm">{
        wallet.credits
        }</span>
       
    </p>
      </div>
   
    <div className="col-start-2 col-end-3 row-start-1 row-end-2  text-gray-300    p-2 bg-gray-medium rounded-xl">
    <h1 className="text-xl  font-bold">Withdraw</h1>

      <WithdrawPage owner={ owner}  wallet={wallet}  />

        
        
        
      </div>
      <div className="col-start-3 col-end-4 row-start-1 row-end-2  text-gray-300 p-2 bg-gray-medium rounded-xl"><h1 className="text-xl  font-bold">Deposit</h1><DepositsPage owner={ owner} wallet={wallet}  /></div>
            <h1 className="text-center text-3xl font-bold text-gray-300 mb-6 mt-6">Transaction Logs</h1>
<div className="grid grid-flow-col space-x-5 col-start-1 col-end-4 ">    <div className=" col-start-1 col-end-2 row-start-4 row-end-7     p-1 items-center bg-gray-medium rounded-xl">
      <h1 className="text-xl  font-bold text-gray-300 pl-2 capitalize"> withdrawals </h1>
<div className="grid  grid-flow-row grid-cols-4 auto-rows-auto  text-center  rounded-full items-center">
<h2 className="font-bold text-gray-300 text-center capitalize" >amount</h2>
        <h2 className="font-bold text-gray-300 text-center capitalize">date</h2>
        <h2 className="font-bold text-gray-300 text-center capitalize">time</h2>
        <h2 className="font-bold text-gray-300 text-center capitalize">credits</h2></div>
      <div className="grid grid-cols-1  grid-flow-row items-center  space-y-2 p-3 overflow-y-scroll overflow-x-hidden  scrollbar-hide h-[580px] ">{
        withdrawals.map((withdrawa: withdrawal) => {
          return (<div key={withdrawa.id} className="grid grid-flow-row grid-cols-4 auto-rows-[22px]  items-center text-center    rounded-full space-x-2  text-white ">
            <p>${withdrawa.amount}</p>
            <p>{withdrawa.date}</p>
            <p> {withdrawa.time}</p>
            <p>{
              withdrawa.credits
            }</p>
          </div>)

        })
        }</div>
        
      </div>
     
    <div className="col-start-2 col-end-3 row-start-4 row-end-7   p-1 bg-gray-medium rounded-xl">
      <h1 className="text-xl  font-bold text-gray-300 pl-2 capitalize"> Deposits </h1>
      <div className="grid  grid-flow-row grid-cols-4 auto-rows-auto  text-center  rounded-full items-center">
        <h2 className="font-bold text-gray-300 text-center capitalize">amount</h2>
        <h2 className="font-bold text-gray-300 text-center capitalize">date</h2>
        <h2 className="font-bold text-gray-300 text-center capitalize">time</h2>
        <h2 className="font-bold text-gray-300 text-center capitalize">credits</h2>
</div>
     <div className="grid grid-cols-1  grid-flow-row items-center  space-y-2 p-3 overflow-y-scroll overflow-x-hidden  h-[580px] scrollbar-hide"> {
        deposits.map((withdrawa: deposit) => {
          return (<div key={withdrawa.id} className="grid grid-flow-row grid-cols-4 auto-rows-[22px]  items-center text-center    rounded-full space-x-2  text-white" >
            <p> ${withdrawa.amount}</p>
            <p> {withdrawa.date}</p>
            <p>{withdrawa.time}</p>
            <p> {
              withdrawa.credits
            }</p>
          </div>)

        })
      }</div>
    </div></div>
    

 
  
  
  </div>)
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

  const wallet = await prisma.wallet.findUnique({
    where: {
      userId: owner?.id
    }
  }).then((result) => {
    return result
  })

  const withdrawals = await prisma.withdrawal.findMany({
    where: {
      userId: owner?.id
    }
  }).then((result) => { 
    return result
  })

  const deposits = await prisma.deposit.findMany({
    where: {
      userId: owner?.id
    }
  }).then((result) => { 
    return result
  })

  return {
    props: {
      owner, wallet, withdrawals, deposits
    }
  }
 }



export default UserWallet
