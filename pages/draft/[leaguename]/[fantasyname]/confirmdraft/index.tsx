import prisma from "@lib/prisma";
import { useEffect, useState } from 'react';
import { Grid } from '@components/ui';
import { Fixture, Teams, League, Players, Participant } from "@prisma/client"

import { GetServerSideProps } from 'next'
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { InferGetServerSidePropsType } from 'next'




const ConfirmDraft = ({  draftman } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
  
  const [message, setMessage] = useState(""); 
 
  const sendDraft = async () => { 
  
    await fetch(`/api/confirmdraft/${draftman.fantasyname}`, {
      method: "GET",
    }).then((res) => res.text().then((text) => {
      setMessage(text + " " + "the link to draft page" + " " + `http://localhost:3000/draft/${draftman.leaguename}/${draftman.fantasyname}`)
      window.location.href = `/draft/${draftman.leaguename}/${draftman.fantasyname}`
    }))

  }


  return (
    <div className="text-gray-300 text-center max-w-[668px] mx-auto rounded-xl  m-[5%] bg-gradient-to-r from-primary p-1 to-secondary" >
      <div className="bg-gray-dark p-[3%] rounded-xl ">
      {
        draftman.confirmedAttendance ? (<p>you have already confirmed attendance the link to the draft page is <a target ="_blank" href={`/draft/${draftman.leaguename}/${draftman.fantasyname}`} rel="noreferrer">link to draft</a> </p>) :(<div>   <h1 className="text-4xl mb-2 font-bold">{draftman.leaguename}</h1> 
      
        <p className="text-xl font-bold mb-2">draft about to start in 30 min</p>  <br/>
          
        <div className="outline w-max mx-auto px-4 py-2 mb-3 rounded-lg outline-secondary bg-gray-medium text-gray-300 text-xl">
      {draftman.fantasyname}
        </div> 
        <p className="text-gray-300 text-lg mb-6 ">Please confirm you are present and will participate</p>
     
          {
            message ? (<p>{message}</p>) : null
          }
                <button className="outline  px-8 py-2 text-xl uppercase outline-secondary rounded-full"  onClick={sendDraft}> confirm</button>
  </div>)
     }

</div>
     
    </div>
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

  const fantasyname = context.params?.fantasyname;

  const draftman = await prisma.participant.findUnique({
    where: {
      fantasyname: fantasyname?.toString()
    }
  }).then(async (participant) => {
    await prisma.$disconnect()
    return participant
   
  })
  return {
    props: { draftman }
  }
}



export default ConfirmDraft
