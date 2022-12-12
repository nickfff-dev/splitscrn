
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faTwitter, faSteam, faDiscord} from "@fortawesome/free-brands-svg-icons"

const Footer2 = () => {
  return(<footer className="bg-gray-medium  flex items-center justify-between px-2 py-[10px] my-auto">
  <span className="text-[11px] text-gray-300  text-center ">&#169;2022  <Link href="/" className="hover:underline uppercase text-[11px]font-xix">SPLT SCRN™ </Link> All Rights Reserved | Powered By Steam™  Not Affiliated with Valve Corp
  </span>
  <ul className="flex flex-wrap items-center text-sm text-gray-300">
      <li>
          <Link href="/" className="mr-4 hover:underline uppercase text-[11px] "><FontAwesomeIcon icon={faTwitter} className="fa-brands fa-twitter rounded bg-gray-300 text-gray-dark p-1"/></Link>
      </li>
      <li>
          <Link href="/" className="mr-4 hover:underline uppercase text-[11px] "><FontAwesomeIcon icon={faSteam} className="fa-brands fa-steam rounded bg-gray-300 text-gray-dark p-1"/></Link>
      </li>
      <li>
          <Link href="/" className="mr-4 hover:underline uppercase text-[11px] "><FontAwesomeIcon icon={faDiscord}className="fa-brands fa-discord rounded bg-gray-300 text-gray-dark p-1"/></Link>
      </li>
      <li>
          <Link href="/" className="mr-4 hover:underline uppercase text-[11px]">Sponsored</Link>
      </li>
      <li>
          <Link href="/" className="mr-4 hover:underline uppercase text-[11px]">|</Link>
      </li>
      <li>
          <Link href="/" className="mr-4 hover:underline uppercase text-[11px]">Privacy policy</Link>
      </li>
      <li>
          <Link href="/" className="mr-4 hover:underline uppercase text-[11px]">|</Link>
      </li>
      <li>
          <Link href="/" className="mr-4 hover:underline uppercase text-[11px]">Cookie policy</Link>
      </li>
      <li>
          <Link href="#" className="mr-4 hover:underline uppercase text-[11px]">|</Link>
      </li>
      <li>
          <Link href="/" className="hover:underline uppercase text-[11px]">Terms of service</Link>
      </li>
  </ul>
</footer>)
}


export default Footer2
