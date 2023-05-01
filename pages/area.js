import Header from '../components/header'
import BgArea from "../assets/area.webp"
import France from "../assets/france.webp"
import Footer from '../components/footer'
import Cartons from "../assets/icons/cartons.webp"
import Devis from "../assets/icons/devis.webp"
import Truck from "../assets/icons/truck.webp"
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import FirstSection from '../components/first-section'




export default function Area() {
  return (
	<>
    <Head>
        <title>Road Runners - Zone d'acheminement</title>
        <link
          rel="canonical"
          href="https://road-runners.fr/area"
          key="canonical"
        />
        <meta
        name="description"
        content="Road Runners, spécialiste du transport dans la région Ile de France et Picardie effectue aussi vos courses vers tout l'héxagone"
        />
        <meta property="og:title" content="Road Runners - Zone d'acheminement" />
        <meta
          property="og:description"
          content="Road Runners, spécialiste du transport dans la région Ile de France et Picardie effectue aussi vos courses vers tout l'héxagone"
        />
    </Head>
		<Header active="zone"></Header>
		<FirstSection bg={BgArea} title="ZONE D'INTERVENTION" subtitle="Expert du transport dans toute la France"></FirstSection>

		<div className="lg:grid lg:grid-cols-2 max-w-screen-xl flex items-center mb-3 md:mb-0 mx-7 mt-14 lg:mx-10 xl:mx-auto">
	  		<div className="  text-md md:text-lg lg:px-7">
	  			<h2 className=" text-xl md:text-2xl  font-bold mb-4">Transport dans toute la France</h2>
				<p> 
				Fort d'une grande connaissance du réseau routier Français, nos Runners garantissent une fiabilité sans faille et une optimisation de vos transports en Ile de France et en Picardie.</p>
				<h3 className='font-semibold text-lg md:text-xl mt-2'>
				  	Transport express et standard
				</h3>
				<p className=''> 
				Pour vos transports standard et express, vous pouvez nous confier vos expéditions en toute confiance et ce dans toute la France.
				</p>
		  		<h3 className='font-semibold text-lg md:text-xl mt-2'>
		  		Déménagements
		  		</h3>
				<p > 
				Nous proposons d'effectuer vos déménagements dans toute la région Ile de France ou Picardie avec nos équipes de déménageurs professionnels</p>

				<div className="flex my-9">
					<div className="wrapper">
  						<div className="link_wrapper">
  						  	<Link href="/contact#form">Devis Express</Link>
  						  	<div className="icon">
  						  	  	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
  						  	  	  	<path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
  						  	  	</svg>
  						  	</div>
  						</div>
					</div>
				</div>
			</div>
		  	<div className="hidden lg:flex items-center  xl:px-7">
              <Image
                alt="image France"
                src={France}
            />
		  	</div>
		</div>
		<div className="section-blue sm:py-5 md:py:0 md:h-48 w-auto grid md:grid-cols-4 sm:grid-cols-2 items-center">
	<div className="flex justify-center">
	  	<div className="circle">
			<div className="flex justify-center">
            <Image
            src={Truck}
            alt="camion"
            />
            </div>
			<div className="font-semibold lg:font-bold hidden md:block text-center">Transport rapide et sécurisé</div>
			<div className="font-semibold lg:font-bold  md:hidden ">Transport Express</div>
	  	</div>
	</div>
	<div className="flex justify-center">
	  	<div className="circle">
			<div className="flex justify-center">
            <Image
                src={France}
                alt="icone france"
            />
            </div>
			<div className="font-semibold lg:font-bold text-center">Transport dans toute la France</div>
	  	</div>
	</div>
	<div className="flex justify-center sm:pt-3 md:pt-0">
	  	<div className="circle">
			<div className="flex justify-center">
            <Image
                src={Cartons}
                alt="Logo2"
            />
            </div>
			<div className="font-semibold lg:font-bold text-center">Déménagement Ile de France et Picardie</div>
	  	</div>
	</div>  
	<div className="flex justify-center sm:pt-3 md:pt-0">
	  	<div className="circle">
	  		<div className="flex justify-center">
              
              <Image
                src={Devis}
                alt="Logo2"    
                />
            </div>
				 <div className="font-semibold lg:font-bold text-center">Devis rapide et gratuit</div>
	  		</div>
		</div>
  	</div>
	<Footer></Footer> 
	</>
  )
}
