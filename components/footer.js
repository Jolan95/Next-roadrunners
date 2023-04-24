import React from 'react'
import Route from "../assets/routes.webp"
import Image from 'next/image'
import Link  from 'next/link'

export default function Footer() {
  return (
<footer className="background-footer" style={{backgroundImage: `url(`+Route.src+`)`, }}>
    <div className=" text-center text-white">
        <div className="px-6 pt-6">
          <div className="mb-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl  flex justify-center">
            rrunners.transport@gmail.com
          </div>
          <div className="mb-4 text-lg text-2xl  lg:text-3xl flex justify-center">
              06.68.58.43.76
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
