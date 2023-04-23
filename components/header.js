import { useState } from "react"
import  Link  from "next/link"
import Logo2 from "../assets/logoRR2.webp"
import Image from "next/image"


export default function Header(props) {
   const [displayMenu, setDisplayMenu] = useState(false)
   const active = props.active

   const toggleMenu = ()=> {
    setDisplayMenu(!displayMenu)
   }

  return (
    <header>
        <nav  className="bg-white border-gray-200">
        <div  className="flex flex-wrap items-center justify-between px-3">
          <Link href="/"  className="flex items-center">
          <Image
            src={Logo2}
            alt="Logo2"
            />
          </Link>
          <button onClick={toggleMenu} data-collapse-toggle="navbar-multi-level" type="button"  className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-multi-level" aria-expanded="false">
            <span  className="sr-only">Open main menu</span>
            <svg  className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div  className={(!displayMenu? "hidden" : "")+" w-full md:block md:w-auto"} id="navbar-multi-level">
            <ul  className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link href="/"  className={(active === "accueil"? " bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")+"block py-2 pl-3 pr-4 rounded md:p-0"} aria-current="page">Accueil</Link>
              </li>
              <li className="mt-4 md:mt-0">
                <Link href="/transport"  className={(active === "transport"? " bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")+"block py-2 pl-3 pr-4  rounded md:p-0"} >Transport</Link>
              </li>
              <li className="mt-4 md:mt-0">
                <Link href="/area"  className={(active === "zone" ?" bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")+"block py-2 pl-3 pr-4  rounded md:p-0"}>Zone d'intervention</Link>
              </li>
              <li className="mt-4 md:mt-0">
                <Link href="/demenagement"  className={(active === "demenagement"? " bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")+"block py-2 pl-3 pr-4  rounded md:p-0"}>Déménagement</Link>
              </li>
              <li className="mt-4 md:mt-0">
                <Link href="/contact"  className={(active === "devis"? " bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")+"block py-2 pl-3 pr-4 rounded md:p-0"}>Contact</Link>
              </li>
            </ul>
          </div>
      </div>
    </nav>
    </header>
  )
}