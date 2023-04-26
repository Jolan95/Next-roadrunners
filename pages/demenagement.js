import React from 'react'
import Header from '../components/header'
import Demenageurs from "../assets/demenageurs.webp"
import Footer from '../components/footer'
import Carton from "../assets/demenagement-carton.webp"
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import FirstSection from '../components/first-section'



export default function Demenagement() {
  return (
    <>
        <Head>
            <title>Road Runners - Demenagement</title>
            <link
              rel="canonical"
              href="https://road-runners-transport.netlify.app/demenagement"
              key="canonical"
            />
            <meta
            name="description"
            content="Road Runners effectue vos déménagements dans toute la région Ile de France et Picardie"
            />
            <meta property="og:title" content="Road Runners - Demenagement" />
            <meta
              property="og:description"
              content="Road Runners effectue vos déménagements dans toute la région Ile de France et Picardie"
            />
        </Head>
        <Header active="demenagement"></Header>
		<FirstSection bg={Demenageurs} title="DÉMÉNAGEMENT" subtitle="Équipe de déménageurs professionnels"></FirstSection>

        <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mb-9 mx-7 mt-14 md:mx-10 xl:mx-auto ">
	  	<div className=" text-md md:text-lg mx-3 flex items-center">
			<div>
	  			<h2 className=" text-xl md:text-2xl  font-bold mb-4">Déménagement professionnel</h2>
				<p className='pt-2'> 
				Besoin d'un service de déménagement de qualité ?
				</p>
				<p className='pt-1'>
					Les déménageurs professionnels de Road Runners,  vous accompagne pour vos déménagements dans toute la région Ile de France et Picardie. Nos déménageurs vous garantissent un service de qualité avec le chargement précautionneux de vos biens jusqu'au déchargement.
				</p>
				<div className="flex  mt-5">
					<div className="wrapper">
  						<div className="link_wrapper">
  						  	<Link href="/contact#form">Demande de Devis</Link>
  						  	<div className="icon">
  						  	  	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
  						  	  	  	<path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
  						  	  	</svg>
  						  	</div>
  						</div>
					</div>
				</div>
			</div>
	  	</div>
	  	<div className="hidden lg:flex mx-4 items-center">
          <Image
                src={Carton}
                alt="demenagement" 
                />
	  	</div>
	</div>
	<Footer></Footer> 
    </>
  )
}
