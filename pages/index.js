import Header from "../components/header";
import truckMercedes from "../assets/mercedes-blanc.webp";
import Bandeau from "../components/bandeau.js";
import AlertDangerous from "../components/alert-dangerous";
import Route from '../assets/routes.webp'
import Map from "../assets/map.webp"
import Link from "next/link";
import Fiat from "../assets/fiat.jpg"
import IconTelephone from "../assets/icons/tel.webp"
import IconMail from "../assets/icons/mail.webp"
import Demenagement from "../assets/demenageurs.webp"
import Form from "../components/form"
import Iframe from "../components/iframe";
import Image from "next/image";
import Head from "next/head";
import FirstSection from "../components/first-section";

export default function Accueil() {
  return (
	<>
  		<Head>
  			<title>Road Runners</title>
  			<link
  			  	rel="canonical"
  			  	href="https://road-runners-transport.netlify.app/"
  			  	key="canonical"
  			/>
  			<meta
  				name="description"
  				content="Road Runners, la clé d'un transport réussi ! Transporteur routier en Ile de France et Picardie."
  			/>
  			<meta property="og:title" content="Road Runners" />
  			<meta
  			  	property="og:description"
  			  	content="Road Runners, la clé d'un transport réussi! Transporteur routier en Ile de France et Picardie."
  			/>
  		</Head>
		<Header active="accueil"></Header>
		<FirstSection bg={Fiat} title="ROAD RUNNERS" subtitle="La clé d'un transport réussi"></FirstSection>
		<div className="lg:grid lg:grid-cols-2 max-w-screen-xl mb-3 md:mb-0 mx-7 mt-14 md:mx-10 xl:mx-auto">
		  	<div className=" md:text-center text-md md:text-lg">
		  		<h2 className=" text-xl md:text-2xl  font-bold mb-4">TRANSPORT PROFESSIONNEL</h2>
				<p> 
					Présents à proximité des grandes zones économiques et des sites industriels, Road Runners et son équipe de Runners professionnel, proposent des solutions de transport routier fiables et adaptées à vos besoins dans toute la région Ile de France et Picardie.
				</p>
				<h3 className="mt-4 mb-1  font-semibold text-lg md:text-xl">
					Transport Standard
				</h3>
				<p>
					Road Runners est votre partenaire idéal pour tous vos projets d’expéditions. Notre équipe intervient également sur des plans stratégiques et opérationnels, vous pourrez ainsi bénéficier d’une solution de transport sur mesure pour planifier l’envoi de toutes vos marchandises.
				</p>
				<h3 className="mt-4 mb-1 font-semibold text-lg md:text-xl">
					Transport Express
				</h3>
				<p>
					Spécialisé dans la livraison express, nous disposons à cet effet d’une équipe de Runners opérationnel et flexible permettant une prise en charge rapide et une livraison efficace et sécurisé de vos marchandises dans toute la France.
				</p>
				<div className="flex md:justify-center mt-5">
					<div className="wrapper">
  						<div className="link_wrapper">
  						  	<Link href="/#form">Devis Express</Link>
  						  	<div className="icon">
  						  	  	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
  						  	  	  	<path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
  						  	  	</svg>
  						  	</div>
  						</div>
					</div>
				</div>
		  	</div>
		  	<div className="hidden lg:block">
    	  		<Image
    	  		  	src={truckMercedes}
    	  		  	alt="mercedes"  
    	  		  	className="image-reverse"  
    	  		/>
		  	</div>
		</div>
		<div className="pt-5 lg:mt-9 mx-6">
			<AlertDangerous></AlertDangerous>
		</div>  
		<Bandeau></Bandeau>
		<div className="bg-white mt-6 md:mt-0">
			<div className="lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto mx-7 py-7 lg:py-16  md:mx-10 xl:mx-auto text-md md:text-lg">
				<div className="hidden lg:flex justify-center items-center">
    	  			<Image
    	        	    src={Map}
    	        	    alt="map"
    	        	    className="h-auto xl:w-9/12 lg:w-11/12"    
    	        	/>
				</div>
				<div className="md:flex md:items-center mx-4">
					<div className="md:text-center lg:text-left">
						<h2 className=" font-bold mb-4  text-xl md:text-2xl">SECTEUR D'ACTIVITÉ</h2>
						<div className=""> 
							<h3 className="mt-4 mb-1 font-semibold text-lg md:text-xl ">Ile de France et Picardie</h3>
							Basé en Ile de France, 
					  		Road Runners est spécialisé dans le transport routier sur la région Ile de France et Picardie. Vous pouvez nous y confier vos courses régulières, vos courses Express ou même vos déménagements.<br/>
							<h3 className="mt-4 mb-1 font-semibold text-lg md:text-xl">Transport National</h3>
							Besoin d'un transport de marchandise en France métopolitaine? Road Runners assure vos courses Express ou régulières dans toutes l'héxagone.
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto mx-7 md:mx-10 xl:mx-auto py-7 lg:py-14 text-md md:text-lg ">
		  	<div className=" mx-4">
		  		<h2 className="  font-bold mb-4 text-xl md:text-2xl">DEMENAGEMENT</h2>
				<p className=" md:text-xl"> 
					Road Runners et ses équipes de déménageurs vous propose un service de déménagement de qualité dans toute la région Ile de France et Picardie. <br/>Vous pouvez nous confier l'acheminement de vos biens. Nos équipes experts de déménageurs s'occupent du chargement et du déchargement en toute sécurité de vos biens que nos Runners acheminent jusqu'à votre nouveau domicile.<br/>
				</p>
				<div className="flex my-5">
					<div className="wrapper">
  						<div className="link_wrapper">
  						  	<Link href="/#form">Devis Express</Link>
  						  	<div className="icon">
  						  	  	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
  						  	  	  	<path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
  						  	  	</svg>
  						  	</div>
  						</div>
					</div>
				</div>
		  	</div>
		 	<div className="hidden lg:flex justify-center items-end xl:items-center ">
    	 <Image
    	            src={Demenagement}
    	            alt="demenagement"    
    	            className="image-med h-auto xl:w-9/12 lg:w-11/12"
    	            />
		 	</div>
		</div> */}
		<div className="background-footer filter-opacity" style={{backgroundImage: `url(`+Route.src+`)`, }}>
			<div className="text-white">
				<h2 id="form" className="text-center font-bold pt-7 text-xl md:text-2xl">DEMANDE DE CONTACT</h2>
		  		<div className="lg:grid text-white lg:grid-cols-2 max-w-screen-xl mx-4 md:mx-7  md:mx-10 xl:mx-auto pb-10 pt-10">
					<div className="flex justify-center lg:justify-start">
						<Form color="white"></Form>
		  			</div>
					<div className="hidden lg:flex justify-center">
						<Iframe></Iframe>
					</div>
		  		</div>
				<footer>
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
    				      <Link href="mentions-legales"> Mentions légales</Link> | <Link href="plan-site">Plan du site</Link>
    				    </div>
    				</div>
   				</footer>
			</div>
		</div>
	</>
  )
}
