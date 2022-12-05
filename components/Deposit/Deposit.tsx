// Components
import { Grid } from '../ui';
import {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import { Fixture, Teams, League, Players, Participant, Wallet, Deposit, User } from "@prisma/client"

import { useSession, signIn, signOut } from 'next-auth/react';

import { useRouter } from 'next/router';


const DepositsPage = ({  owner, wallet }: {  owner: User , wallet: Wallet}) => {
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
    <Grid>

      <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between", flexWrap:"wrap" }}>

        {
          amounts.map((amount) => { 
            return <button key={amount} onClick={onDepositAmountChange} value={amount}  style={{ padding: "5%", margin: "5%", borderRadius: "5px" }}>{amount}</button>

          })
        }
        <button onClick={onDepositAmountSubmit}>Confirm</button>
        <p>
            fees charged : {
             depositAmount * 0.05
            }
        </p>
        
        <p>amount you will get {
        
        depositAmount - (depositAmount * 0.05)
        }</p>
       
        <p>
          new balance: $ {wallet.balance}
          
        </p>
        <p> {responsetext}</p>
      </div>
      
 
      </Grid>
  )
}


export default DepositsPage
