import React from 'react'
import Header from '../components/header'
import BgChargement from '../assets/chargement.webp'
import Footer from '../components/footer'
import Camion from "../assets/camion-route.webp"
import Camion2 from "../assets/camion2.webp"
import Link from 'next/link'
import Bandeau from '../components/bandeau'
import AlertDangerous from '../components/alert-dangerous'
import Image from 'next/image'
import Head from 'next/head'
import FirstSection from '../components/first-section'

export default function Transport() {
  return (
    <>
	  <Head>
  <title>Road Runners - Transports</title>
  <link
    rel="canonical"
    href="https://road-runners-transport.netlify.app/matieres-dangereuses"
    key="canonical"
  />
  <meta
  name="description"
  content="Road Runners assure vos transports stadards et express dans toute la France"
  />
  <meta property="og:title" content="Road Runners" />
  <meta
    property="og:description"
    content="Road Runners assure vos transports standards et express dans toute la France"
  />
  </Head>
        <Header active="transport"></Header>
        <FirstSection bg={Camion} title="TRANSPORT" subtitle="La clé d'un transport réussi"></FirstSection>
        <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mb-3 md:mb-0 mx-7 mt-14 lg:mx-10 xl:mx-auto flex items-center">
	  	    <div className="  text-md md:text-lg lg:px-7">
	  	    	<h2 className=" text-xl md:text-2xl  font-bold mb-4">TRANSPORT STANDARD</h2>
	  	    	{/* <p className="text-center font-bold">Partenaire de confiance pour tous transports de marchandise !</p> */}
		    	<p className='pt-2'> 
          Besoin de programmer des transports de marchandises de manière journalière, hebdomadaire ou mensuelle?
          </p>
		    	<p className='pt-1'> 
          Afin de gagner en sérénité, confiez à notre équipe expérimentée la prise en charge de vos expéditions et  bénéficiez d’une solution de transport sur mesure pour planifier l’envoi de vos marchandises en toute sécurité.
          </p>
	  	    </div>
	      	<div className="hidden lg:flex items-center  xl:px-7">
              <Image
                src={BgChargement}
                alt="chargement"
                className='image-reverse'
                   />
	      	</div>
	    </div>
        <div className='bg-slate-800 text-center text-white px-4 py-7 mt-10 text-md md:text-lg'>
            Vous avez besoin d'un transport de qualité ? Effectuez un devis ou demandez une prise de contact
            <div className="flex justify-center mt-3">
                <Link href="/contact#form"><button className="button-devis text-lg">Demande de devis</button></Link>
            </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mb-3 md:mb-0 mx-7 mt-14 lg:mx-10 xl:mx-auto pb-14 ">
	      	<div className="hidden lg:flex items-center xl:px-7">
              <Image
                src={Camion2}
                alt="camion"
                />
	      	</div>
            <div className='flex items-center'>
	  	        <div className="  text-md md:text-lg lg:px-7">
	  	        	<h2 className=" text-xl md:text-2xl  font-bold mb-4">TRANSPORT EXPRESS</h2>
		        	<p className='pt-2'> 
              Besoin d'un transport urgent et sécurisé de marchandise ? Vous êtes professionnel ou particulier?
               </p>
		        	<p className='pt-1'> 
               Nos Runners vous apporterons,  une solution claire, efficace et adaptée à vos contraintes tout en garantissant l’intégrité des marchandises transportées.
               </p>
	  	        </div>
            </div>
	    </div>
        <div className='px-4'>
        <AlertDangerous></AlertDangerous>
        </div>
        <Bandeau></Bandeau>  
        <Footer></Footer>  
    </>
  )
}
