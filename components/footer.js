import React from 'react'
import Route from "../assets/routes.webp"
import Image from 'next/image'
import Link  from 'next/link'
import IconTelephone from "../assets/icons/tel-white.webp"
import IconMail from "../assets/icons/mail-white.webp"

export default function Footer() {
  return (
<footer className="background-footer" style={{backgroundImage: `url(`+Route.src+`)`, }}>
    <div className=" text-center text-white">
        <div className="px-6 pt-6">
          	<div className="mb-4 text-lg sm:text-2xl items-center md:text-3xl lg:text-4xl  flex justify-center">
			  	<Image
                    src={IconMail}
                    alt="tel"
                    className="md:h-6 h-5 w-auto mr-1 mt-1 md:mt-3 "
                />
          	  	<div>: rrunners.transport@gmail.com</div>
          	</div>
          	<div className="mb-4 text-base text-xl lg:text-2xl flex justify-center items-center">
              	<Image
                	src={IconTelephone}
                	alt="mail"
                	className="h-4 mt-1 w-auto lg:h-5 mr-1  "
				/>
              	<div > : 07.87.46.07.44</div>
          	</div>
        </div>
        <div
          	className="p-4 text-sm text-center">
          	<Link href="/mentions-legales">Mentions légales</Link> | <Link href="/plan-site">Plan du site</Link>
        </div>
    </div>
</footer>
  )
}
