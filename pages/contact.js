import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Form  from '../components/form'
import Iframe from "../components/iframe"
import IconLocalisation from "../assets/icons/localisation.webp"
import IconTelephone from "../assets/icons/tel.webp"
import IconMail from "../assets/icons/mail.webp"
import Link from 'next/link'
import Image from 'next/image'


export default function Devis() {


  return (
    <>
        <Header active="devis"></Header>
        <div className='p-5 sm:p-10' id="form">
            <h1 className='text-2xl font-semibold text-center py-0 mg:py-3 lora'>Contact</h1>
            <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto mx-7 md:mx-10 xl:mx-auto pb-7 lg:py-7 text-md md:text-lg ">
                <div>
                    <div className='border-2 border-black p-5 mb-5 mt-7 lg:mt-0'>
                        <h1 className='text-center text-xl text-cyan-600 font-semibold'>
                        Road Runners
                        </h1>
                        <div>
                            <div className='flex items-center'>
                                <Image
                                src={IconTelephone}
                                alt="tel"
                                className="h-4 w-auto"
                                />
                                {/* <img src={IconTelephone} alt="icon" className='h-4 w-auto'></img> */}
                                 : 06.68.58.43.76
                            </div>
                            <div className='flex items-center'>
                                <Image
                                src={IconMail}
                                alt="mail"
                                className="h-4 w-auto"
                                />
                                {/* <img src={IconMail} alt="icon" className='h-4 w-auto'></img> */}
                                 : RRUNNERS.TRANSPORT@GMAIL.COM
                            </div>
                            <div className='flex items-center'>
                                <Image
                                src={IconLocalisation}
                                alt="localisation"
                                className="h-4 w-auto"

                                />
                                {/* <img src={IconLocalisation} alt="icon" className='h-4 w-auto'></img>  */}
                                : 20 RUE ROGER SALENGRO 95270 SAINT-MARTIN-DU-TERTRE
                            </div>
                        </div>
                    </div>
                    <div className='p-2 bg-slate-500 rounded text-white my-4'>
                        Pour une question ou un devis veuillez remplir le formulaire, nous vous répondrons dans les plus brefs délais.
                    </div>
                    <div className='hidden lg:block'>
                        <Iframe></Iframe>
                    </div>
                </div>
                <div  className='wrapper-form order-first '>
                    <h2 className='text-xl font-semibold'>Demande de contact</h2>
                    <Form color="black">
                    </Form>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
  )
}
