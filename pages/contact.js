import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Form  from '../components/form'
import Iframe from "../components/iframe"
import IconTelephone from "../assets/icons/tel.webp"
import IconMail from "../assets/icons/mail.webp"
import Linkedin from "../assets/linkedin.webp"
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Devis() {
  return (
    <>
    <Head>
        <title>Road Runners - Contact</title>
        <link
          rel="canonical"
          href="https://road-runners.fr/contact"
          key="canonical"
        />
        <meta
        name="description"
        content="Road Runners, prise de contact ou devis express gratuit pour des transport dans toute la France."
        />
        <meta property="og:title" content="Road Runners - Contact" />
        <meta
          property="og:description"
          content="Road Runners vous recontacte le plus rapidement possible pour repondre à vos requètes ou effectuer un devis gratuit"
        />
    </Head>
        <Header active="devis"></Header>
        <div className='p-5 sm:p-10' id="form">
            <h1 className='text-2xl font-semibold text-center py-0 mg:py-3 kanit'>Contact</h1>
            <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto mx-7 md:mx-10 xl:mx-auto pb-7 lg:py-7 text-md md:text-lg ">
                <div>
                    <div className='border-2 border-black p-5 mb-5 mt-7 lg:mt-0'>
                        <h2 className='text-center text-xl color-logo font-semibold underline'>
                        ROAD RUNNERS
                        </h2>
                        <div>
                            <div className='flex items-center'>
                                <Image
                                src={IconTelephone}
                                alt="tel"
                                className="h-4 w-auto"
                                />
                                 : 07.87.46.07.44
                            </div>
                            <div className='flex items-center'>
                                <Image
                                src={IconMail}
                                alt="mail"
                                className="h-4 w-auto"
                                />
                                 : RRUNNERS.TRANSPORT@GMAIL.COM
                            </div>
                            <div className='flex items-center '>
                                <Image
                                src={Linkedin}
                                alt="mail"
                                className="h-4 w-auto mr-1"
                                />
                                 : <Link href="https://www.linkedin.com/in/road-runners-89b61726b/" className="text-cyan-800 ml-1">Road Runners</Link>
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
                    <h2 className='text-xl font-semibold underline'>Devis Express</h2>
                    <Form color="black">
                    </Form>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
  )
}
