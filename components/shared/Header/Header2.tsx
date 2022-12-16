import {useState, useEffect} from "react"
import s from './Header.module.css';
import Logo from '@public/images/logo.svg';
import Image from 'next//image';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
const Header2 = () => {

  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => { 
    setOpen(!isOpen);

  }
  const { data: session } = useSession();
  return (
    <header className="h-15 bg-gray-light mt-5 font-dubai">
    <nav className="relative px-2 py-4">
      
      <div className="container  mx-auto flex justify-between items-center">
      <Link href="/" className="flex items-center gap-1 font-xix"><Image src={Logo} alt='Website logo' height={50} width={50} /> <h1 className="self-center text-3xl text-gray-300">SPLT SCRN</h1></Link>
          <ul className={`${s.mainmenu} flex items-center  justify-between w-1/3`}>
            <li className="text-gray-300  active:text-secondary text-lg"><Link href="/">Home</Link></li>
            <li className="text-gray-300 active:text-secondary text-lg"><Link href="/alleagues">Leagues</Link></li>
            <li className="text-gray-300 active:text-secondary text-lg">
              <Link href="/stats" >Stats</Link> 
             
            </li>
            <li className="text-gray-300  active:text-secondary text-lg"><Link href="/user/profile">Account</Link></li>
            <li className="text-gray-300 active:text-secondary text-lg"><Link href="/create-league">Create League</Link></li>
          </ul>

          {
            session?.user? (  <div className="flex space-x-3"> <button  className="bg-gray-dark outline outline-1  outline-secondary px-5 py-1 rounded-3xl hover:outline-gray-300 text-gray-300  flex" role="button"><span className="  hover:text-gray-300">{session?.user?.name}</span></button>
            <Link href="/auth/signin" className="bg-gray-dark outline  outline-secondary px-5 py-1 rounded-3xl hover:outline-gray-300 text-gray-300 flex outline-1" role="button"><span className="   hover:text-gray-300">Sign Out</span></Link></div>):(  <div className="flex space-x-3"> 
        <Link href="/auth/signin" className="bg-gray-dark outline  outline-secondary px-5 py-1  rounded-3xl ourline-1 hover:outline-gray-300 text-gray-300 flex" role="button"><span className="   hover:text-gray-300">Sign In</span></Link></div>)
        }
        <div className={s.burger}>
        <button  id="mobile-icon"data-collapse-toggle="navbar-sticky" onClick={() => {toggleMenu()
}}type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    </div>
        </div>
      

      <div className={`${isOpen? "":"hidden"} flex justify-end  mt-5`}>
        <div id="mobile-menu" className="mobile-menu  w-72   relative">
          <ul className="bg-gray-100 shadow-lg leading-9 font-bold ">
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-gray-300pl-4"><Link href="/" className="block pl-7">Home</Link></li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-gray-300pl-4"><Link href="/alleagues" className="block pl-7">Leagues</Link></li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white">
              <Link href="/stats" className="block pl-11">Stats</Link> 
            </li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-gray-300pl-4"><Link href="/user/profile" className="block pl-7">Account</Link></li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-gray-300pl-4"><Link href="/create-league" className="block pl-7">Create League</Link></li>
          </ul>
          </div>
      </div>

    </nav>
  </header>
  )
}

export default Header2
