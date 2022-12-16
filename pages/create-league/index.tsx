

import { league as Mchezo } from "@prisma/client"
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { calculateLeagueDuration } from "../../lib/calculate";
import { useSession, signIn, getSession, signOut } from 'next-auth/react';
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import prisma from '../../lib/prisma';
import CreateLeague from "../../components/Form/Creatorform";
import { Grid } from '../../components/ui';



const CreateaLeague = ({ username, owner }:  InferGetServerSidePropsType<typeof getServerSideProps>) => { 
    
  
  useEffect(() => { 

    if (owner.verificationCode === null || owner.verificationCode === "" || owner.emailVerified=== false) {
      window.location.href = "/user/verify"
    }
  } ,[owner.verificationCode, owner.emailVerified])


  const[leaguelink, setLeagueLink] = useState("")
 
  const [league, setLeague] = useState<Mchezo>();

  const [newLeaguedata, setNewLeaguedata] = useState({
    name: "",
    region: "",
    owner:username,
    inviteOnly: "false",
    draftTime: "",
    startDate: "",
    endDate: "",
    buyIn: "false",
    buyInFee: 0,
    duration: 0,
    houseFee: 0,
    minPlayers: 0,
    maxPlayers: 0,
   
  

  })



 









  const submitLeague = async () => { 

const body = newLeaguedata
    // check for empty fields
    if (body.name === "" || body.region === "" || body.owner === "" || body.inviteOnly === "" ||  body.draftTime === "" || body.startDate === "" || body.endDate === "" || body.buyIn === "" ||   body.minPlayers === 0 || body.maxPlayers === 0) { 
      alert("All fields are required")
      return
    }
  
    await fetch("/api/create-league", {
      method: 'POST',
      body: JSON.stringify(body)
    }).then((res) => {
      res.text().then((text) => {
        setLeagueLink(text)
        alert("League Created Successfully")
      })
    }).catch((err: any) => { 
      console.error(err.message);
    })


  }

  return (
    <>
  
      {
        username ? <CreateLeague username={username}/> : <p>KindlylOGiN</p>
      }
      </>
)
  
}
 
export const getServerSideProps: GetServerSideProps = async (context) => {

  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  const username = session?.user?.name?.toString()
  console.log(session?.user?.name?.toString())

  const owner = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
      
    }
  }).then((data) => {
    return data
  })
  return {
    props: { username, owner },
  }
}


 




export default CreateaLeague



