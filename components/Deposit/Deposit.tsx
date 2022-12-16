// Components
import { Grid } from '../ui';
import {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import {  wallet, deposit, user } from "@prisma/client"

import { useSession, signIn, signOut } from 'next-auth/react';

import { useRouter } from 'next/router';


const DepositsPage = ({  owner, wallet }: {  owner: user , wallet: wallet}) => {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }
  
  const { data: session } = useSession();
  const [depositAmount, setDepositAmount] = useState(0);
  const [responsetext, setResponseText] = useState("")
  const amounts  = [10, 20, 50, 100, 200, 500]

  const onDepositAmountChange = (e: any) => {
    setDepositAmount(Number(e.target.value));
    console.log(e.target.value)
  }

  const onDepositAmountSubmit = async () => {
    let amount = depositAmount
    let userName = session?.user?.name?.toString()
    let userId = owner.id
    let email = owner.email
    let task = "save deposit"
    let birthday = owner.birthDate
    let walletkey = owner.walletkey

    try {
      await fetch(`/api/user/${owner.name}`, {
        method: 'POST',
        body: JSON.stringify({
          amount,
          userName,
          email,
          birthday,
          userId,
          task,
          walletkey
        })
      }).then((res) => {
        res.text().then((text) => {
          console.log(text)
          setResponseText(text)
          refreshData()

        })

      })

    } catch (err: any) {
      console.error(err.message);
    }

  }

  return (
  

      <div className="p-1 grid grid-cols-3     grid-flow-row gap-3" >

        {
         amounts && amounts.map((amount) => { 
            return <button className=" rounded-lg text-gray-200  font-bold py-1 focus:outline outline-primary bg-gray-light w-24 hover:bg-secondary hover:text-gray-medium text-sm mx-auto" key={amount} onClick={onDepositAmountChange} value={amount} >${amount ? amount.toFixed(2) : 0}</button>

          })
        }
        <button className=" rounded-full  font-bold  py-1 focus:outline outline-primary bg-gray-light w-24 mx-auto" onClick={onDepositAmountSubmit}><span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Confirm</span></button>
        <div className=" flex   row-start-5 ml-8  justify-between space-x-4 w-[430px] text-white">
          <p className="font-bold capitalize">
            fees charged:<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> ${
         depositAmount ?    (  depositAmount * 0.05).toFixed(2) : 0
            }</span>
        </p>
        
        <p className="font-bold capitalize">Deposit: <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> ${
        
        depositAmount ? ( depositAmount - (depositAmount * 0.05)).toFixed(2) : 0
        }</span></p>
       
        <p className="font-bold capitalize">
          new balance: <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> ${ wallet? wallet.balance.toFixed(2): 0}</span>
          
        </p>
        <p className="font-bold capitalize bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> {responsetext}</p></div>
      </div>

 
    
  )
}


export default DepositsPage
