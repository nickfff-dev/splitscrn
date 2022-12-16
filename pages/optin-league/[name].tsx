import prisma from "@lib/prisma";
import { useEffect, useState } from 'react';
import { Grid } from '@components/ui';


import { useSession, signIn, getSession, signOut } from 'next-auth/react';
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'








const JoinLeague = ({ league, user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  
  
  useEffect(() => { 

    if (user.verificationCode === null || user.verificationCode === "" || user.emailVerified=== false) {
      window.location.href = "/user/verify"
    }
  } ,[user.verificationCode,user.emailVerified])
  const [teamName , setTeamName] = useState("");
  const { data: session } = useSession();
  const [responsetext, setResponseText] = useState("")
  const [invitecode, setInviteCode] = useState("")
  const [initiateInvite, setInitiateInvite] = useState(false)

  const enrollToleague = async () => {
    let leaguename = league.name
    let username = session?.user?.name?.toString()
    let teamname = teamName
    let email = session?.user?.email
    let userId = user.id
    let inviteOnly = league.inviteOnly
    let buyIn = league.buyIn
    let buyInFee = league.buyInFee
    let leagueId = league.id
    let task = "enroll"
   
    
    try {
      await fetch(` http://localhost:3000/api/optin-league/${league.name}`, {
        method: 'POST',
        body: JSON.stringify({
          leaguename,
          username,
          teamname,
          userId,
          inviteOnly,
          buyIn,
          buyInFee,
          email,
          leagueId,
          task
        })
      }).then((res) => {
        res.text().then((data) => {
          if (data === "success") {
            console.log(data)
            setInitiateInvite(false)
            setResponseText("You have successfully enrolled in this league")
            window.location.href = `/league-summary/${league.name}`
          } else if (data.startsWith("sent code to")) {
            console.log(data)
            setInitiateInvite(true)
            setTeamName(data.split("sent code to")[1])
            setResponseText(`This league is invite only, please enter the invite code sent to ${user.email}`)
          } else if (data === "insufficient funds") {
            console.log(data)
            setResponseText("You do not have enough funds to enroll in this league please deposit more funds")
             
            window.location.href = "/user/wallet"
          } else if (data === "league full") { 
            console.log(data)
            setResponseText("This league is full")


          }
         
          
        
       })
  
      })

    } catch (err: any) { 
      console.error(err.message);
    }
  
  }




  return (<div className="m-[5%]">
    <div className=" bg-gradient-to-r from-primary to-secondary p-1 rounded-xl max-w-[600px] mx-auto ">
      <div className="bg-gray-dark p-5 rounded-xl"> 
      
      {
        initiateInvite ? <label className="flex space-x-3 flex-row" htmlFor="invitecode" ><p className="text-gray-300 font-bold text-lg">Invite Code</p><input className="bg-transparent outline rounded text-left px-2 text-secondary text-gray-300  font-bold text-lg" value={invitecode} type="text" placeholder="invitecode.." name="invitecode" onChange={ 
          (e) => { 
            setInviteCode(e.target.value)
          }
        } /><input type="submit" value="Submit" onClick={ 
            async () => {
              await fetch(`/api/optin-league/${league.name}`, {
                method: "POST",
                body: JSON.stringify({
                  inviteCode: invitecode,
                  leaguename: league.name,

                  teamname: teamName,
                  task: "verifyInviteCode"
                })
              }).then((res) => { 
                res.text().then((data) => { 
                  console.log(data)
                  if (data === "success") {
                    window.location.href = `/league-summary/${league.name}`
                  } else { 
                    setResponseText("Invite code is invalid")
                  }
                })
              })
            }} className="outline outline-secondary px-8 text-gray-300 py-1 text-xl text-center uppercase" /></label> :(<div className="flex flex-col space-y-5 items-center ">      <label className="flex items-center justify-between space-x-3" htmlFor="leaguename" ><p className=" text-gray-300 font-bold text-lg">League Name</p>
        <input defaultValue={league.name} className="bg-transparent text-secondary font-bold text-lg" /> </label>
      <label className="flex items-center space-x-5" htmlFor="username" ><p className=" text-gray-300 font-bold text-lg">username:</p>
        <input className="bg-transparent text-secondary font-bold text-lg" defaultValue={session?.user?.name?.toString()} /> 
      </label>

      <label className="flex items-center justify-between space-x-5 " htmlFor="teamname" ><p className=" text-gray-300 font-bold text-lg">Team Name </p>
        <input className="bg-transparent outline rounded text-left px-2 text-secondary text-gray-300  font-bold text-lg" name ="teamname" placeholder="fantasy name...."  onChange={
          (e) => { 
            setTeamName(e.target.value)
          }
        } />
      </label>
      <div><button className="outline outline-secondary px-8 text-gray-300 py-1 text-xl text-center uppercase" onClick={enrollToleague}>JOIN</button></div>
      <h1 style={{color: "white"}}>{
      responsetext? responsetext : null
      }</h1></div>)
        }
        </div>
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
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string
    }
  })
  const name = context.params?.name
  const league  = await prisma.league.findUnique({
    where: {
      name: name?.toString()
    }
  })


  return {
    props: { league, user }
  }
  
}





export default JoinLeague
