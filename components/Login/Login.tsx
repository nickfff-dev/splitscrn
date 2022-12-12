import { signIn, signOut } from "next-auth/react"
import S from "./login.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
export default function SignIn({ providers, session } : {providers: any, session:any}) {
  return (
    <div className={`${S.root}`}>
      <div className={`${S.loginContainer}`}>
        {
          session?.user ? (<div className={`${S.loginContainerInner}`}>
          <h1>SignOut</h1>
          <div className={`${S.loginCardOuter}`}>
          <div className={`${S.loginCardInner}`}>
      
        <div className={`${S.buttongr}`}>
          <button className={`${S.btnlgin}`} onClick={() => { try{signOut()}catch(e:any){console.log(e)} }}>
                    <span> SignOut</span> 
          </button>
        </div>
  
          </div>
          </div>
          </div>) :(        <div className={`${S.loginContainerInner}`}>
          <h1>Log in</h1>
          <div className={`${S.loginCardOuter}`}>
          <div className={`${S.loginCardInner}`}>
      {Object.values(providers).map((provider:any) => (
        <div className={`${S.buttongr}`} key={provider.name}>
          <button className={`${S.btnlgin}`} onClick={() => { try{signIn(provider.id, { callbackUrl: 'http://localhost:3000/user/verify' })}catch(e:any){console.log(e)} }}>
          <span className="flex items-center space-x-2">    {
              provider.name === "Google" ? (<FontAwesomeIcon icon={faGoogle} />) : (<FontAwesomeIcon icon ={faTwitch}/>)
           }<span> Sign in with {provider.name}</span></span>
          </button>
        </div>
      ))}
          </div>
          </div>
          </div>)
}
        </div>
    </div>
  )
}
