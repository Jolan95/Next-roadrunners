import React from 'react'
import IconTruck from "../assets/icons/truck.webp"
import IconPrice from "../assets/icons/price.webp"
import IconRespect from "../assets/icons/respect.webp"
import IconTrust from "../assets/icons/trust.webp"
import Image from 'next/image'

export default function Bandeau() {
  return (
    <div className="section-blue sm:py-5 md:py:0 md:h-48 w-auto grid md:grid-cols-4 sm:grid-cols-2 items-center">
    <div className="flex justify-center">
      <div className="circle">
        <div className="flex justify-center">
        <Image
        src={IconTruck}
        alt="Logo2"
        />
        </div>
        <div className="font-bold  hidden md:block text-center">Transport rapide et sécurisé</div>
        <div className="font-semibold lg:font-bold   md:hidden ">Transport Express</div>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="circle">
        <div className="flex justify-center">
        <Image
        src={IconPrice}
        alt="Logo2"
        />
        </div>
        <div className="font-semibold lg:font-bold text-center">Prix attractifs</div>
      </div>
    </div>
    <div className="flex justify-center sm:pt-3 md:pt-0">
      <div className="circle">
        <div className="flex justify-center">
        <Image
        src={IconTrust}
        alt="Logo2"
        />
        </div>
        <div className="font-semibold lg:font-bold text-center">Fiabilité</div>
      </div>
    </div>
    <div className="flex justify-center sm:pt-3 md:pt-0">
      <div className="circle">
        <div className="flex justify-center">
        <Image
        src={IconRespect}
        alt="Logo2"
        />
        </div>
        <div className="font-semibold lg:font-bold text-center">Respect des normes</div>
      </div>
    </div>  
  </div>
  )
}
