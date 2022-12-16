import { Grid } from '../../components/ui';
import {useState} from 'react';

import { wallet,user } from "@prisma/client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


const WithdrawPage = ({ owner, wallet }: { owner: user, wallet: wallet }) => { 
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }


  
    const { data: session } = useSession();
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [responsetext, setResponseText] = useState("")
  
  const onWithdrawAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
    setWithdrawAmount(Number(e.target.value));
    
  }
  const resetForm = () => { 
    setWithdrawAmount(0)
    setResponseText("")

  }
  
    const onWithdrawAmountSubmit = async () => {
      let amount = withdrawAmount
      let userName = session?.user?.name?.toString()
      let email = owner.email
      let userId = owner.id
      let task = "save withdrawal"
      let birthday = owner.birthDate
  
      try {
        await fetch(`/api/user/${owner.name}`, {
          method: 'POST',
          body: JSON.stringify({
            amount,
            userName,
            birthday,
            userId,
            email,
            task
          })
        }).then((res) => {
          res.text().then((text) => {
            setResponseText(text) 
            refreshData()
  
          })
  
        })
  
      } catch (err: any) {
        console.error(err.message);
      }
  
    }
  
    return (
      
  
        <div  className="p-1 grid grid-cols-1    grid-flow-row gap-3">
        <div className="col-span-1 space-y-4">
          <label className="font-bold  " htmlFor="withdrawAmount" ><span className=" pr-6">Credits:</span><input className="h-8 text-gray-300 font-bold    px-4  bg-gray-light rounded-lg" type="number" name="withdrawAmount"  onChange={onWithdrawAmountChange}  /> 
        </label>
        
        <button className="rounded-full py-1 ml-6  font-bold   focus:outline outline-primary bg-gray-light px-5 capitalize" onClick={onWithdrawAmountSubmit}><span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">confirm</span></button>
          <div className="flex space-x-10">
        <p className="font-bold capitalize">Withdraw: <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">${
            
            withdrawAmount &&  (withdrawAmount / 100).toFixed(2)
          
          }</span></p>
          <p className="font-bold capitalize">
            fees : <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> ${
            withdrawAmount &&  (withdrawAmount / 100 * 0.05).toFixed(2)
            }</span>
          </p> 
          
          <p className="font-bold capitalize">new balance: <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ${ wallet && wallet.balance.toFixed(2)}</span>
          </p>
          <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ">{responsetext}</p>
          </div>
        </div>
      
   
    </div>
      
      
    )
}


export default WithdrawPage
