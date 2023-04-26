import Header from '../components/header'
import Footer from '../components/footer'
import BgMarchandise from "../assets/danger.webp"
import Link from 'next/link'
import Logoclasse2 from "../assets/logo-classe/classe2.webp"
import Logoclasse3 from "../assets/logo-classe/classe3.webp"
import Logoclasse41 from "../assets/logo-classe/classe41.webp"
import Logoclasse42 from "../assets/logo-classe/classe42.webp"
import Logoclasse43 from "../assets/logo-classe/classe43.webp"
import Logoclasse51 from "../assets/logo-classe/classe51.webp"
import Logoclasse52 from "../assets/logo-classe/classe52.webp"
import Logoclasse61 from "../assets/logo-classe/classe61.webp"
import Logoclasse62 from "../assets/logo-classe/classe62.webp"
import Logoclasse8 from "../assets/logo-classe/classe8.webp"
import Logoclasse9 from "../assets/logo-classe/classe9.webp"
import Image from 'next/image'
import Head from 'next/head'
import FirstSection from '../components/first-section'

export default function MatieresDangereuse() {
  return (
    <>
	<Head>
  <title>Road Runners - Matières dangereuses</title>
  <link
    rel="canonical"
    href="https://road-runners-transport.netlify.app/matieres-dangereuses"
    key="canonical"
  />
  <meta
  name="description"
  content="Road Runners assure vos transports de matières dangereuses dans toute la France"
  />
  <meta property="og:title" content="Road Runners" />
  <meta
    property="og:description"
    content="Road Runners assure vos transports de matières dangereuses dans toute la France"
  />
  </Head>
    <Header></Header>
	<FirstSection bg={BgMarchandise} title="MATIERES DANGEREUSES" subtitle="Transport de marchandises dangereuses par voie terrestre"></FirstSection>
  	<div className="md:flex md:items-center px-4 py-5 bg-white">
		<div className=" lg:text-left">
			<h2 className=" font-bold mb-4 mt-4 text-xl md:text-2xl">MATIERES DANGEREUSES</h2>
			<div > 
				Nos Runners ont tous suivis une formation ADR abilitant au transport de marchandises dangereuses par voie terrestre.
				<h3 className="mt-4 mb-1 font-semibold text-lg md:text-xl">Formation ADR</h3>			
          				La formation ADR, passée par l'integralité de nos runners, nous permet d'assurer vos transports de matières dangereuses.<br/>
          				Les marchandises dangereuses sont divisés en Classes de Danger. <br/>		
					<div className='pt-5 pb-2 font-semibold'>Liste des classes de marchandieses dangereuses pouvant être transportés par nos Runners : </div>
					<hr></hr>
					<div className='flex items-center text-left p-2'>
						<div className='w-44  hidden md:block'>
                        <Image
                        src={Logoclasse2}
                        alt="icons-danger"
                        className="img-logo-classe"
                        />
						</div>
						<div>
							<div className='font-semibold '>
              					Classe 2
              					</div>
							Gaz
						</div>
					</div>
					<hr></hr>
					<div className='flex items-center text-left p-2'>
						<div className='w-44  hidden md:block'>
                        <Image
                        src={Logoclasse3}
                        alt="icons-danger"
                        className="img-logo-classe"
                        />
						</div>
						<div>
							<div className='font-semibold '>
              					Classe 3
              					</div>
							Matières liquides inflammables
						</div>
					</div>
					<hr></hr>
					<div className='flex items-center text-left p-2'>
						<div className='w-44 hidden md:block'>
                        <Image
                        src={Logoclasse41}
                        alt="icons-danger"
                        className="img-logo-classe"
                        />
						</div>
						<div>
							<div className='font-semibold '>
              					Classe 4.1
              					</div>
							Matières solides inflammables, matières solides ou liquides autoréactives et matières solides, explosibles désensibilisés.
						</div>
					</div>
					<hr></hr>
					<div className='flex items-center text-left p-2'>
						<div className='w-44 hidden md:block'>
                        <Image
                        src={Logoclasse42}
                        alt="icons-danger"
                        className="img-logo-classe"
                        />
						</div>
						<div>
							<div className='font-semibold '>
              					Classe 4.2
              					</div>
							Matières sujettes à l'inflammation spontanée
						</div>
					</div>
					<hr></hr>
					<div className='flex items-center text-left p-2'>
						<div className='w-44 hidden md:block'>
                        <Image
                        src={Logoclasse43}
                        alt="icons-danger"
                        className="img-logo-classe"
                        />
						</div>
						<div>
							<div className='font-semibold '>
              					Classe 4.3
              					</div>
							Matières qui, au contact de l’eau, dégagent des gaz inflammables
						</div>
					</div>
					<hr></hr>
					<div className='flex items-center text-left p-2'>
						<div className='w-44 hidden md:block'>
                        <Image
                        src={Logoclasse51}
                        alt="icons-danger"
                        className="img-logo-classe"
                        />
						</div>
						<div>
							<div className='font-semibold '>
              					Classe 5.1
              					</div>
							Matières comburantes
						</div>
					</div>
					<hr></hr>
					<div className='flex items-center text-left p-2'>
						<div className='w-44 hidden md:block'>
                        <Image
                        src={Logoclasse52}
                        alt="icons-danger"
                        className="img-logo-classe"
                        />
						</div>
						<div>
							<div className='font-semibold '>
              					Classe 5.2
              					</div>
							Peroxydes organiques
						</div>
					</div>
					<hr></hr>
					<div className='flex items-center text-left p-2'>
						<div className='w-44 hidden md:block'>
                        <Image
                        src={Logoclasse61}
                        alt="icons-danger"
                        className="img-logo-classe"
                        />
						</div>
						<div>
							<div className='font-semibold'>
              					Classe 6.1
              					</div>
							Matières toxiques
						</div>
					</div>
					<hr></hr>
					<div className='flex items-center text-left p-2'>
						<div className='w-44 hidden md:block'>
                        <Image
                        src={Logoclasse62}
                        alt="icons-danger"
                        className="img-logo-classe"
                        />
						</div>
						<div>
							<div className='font-semibold text-left'>
              					Classe 6.2
              					</div>
							Matières infectieuses
						</div>
					</div>
					<hr></hr>
					<div className='flex items-center text-left p-2'>
						<div className='w-44 hidden md:block'>
                        <Image
                        src={Logoclasse8}
                        alt="icons-danger"
                        className="img-logo-classe"
                        />
						</div>
						<div>
							<div className='font-semibold '>
              					Classe 8
              					</div>
							Matières corrosives
						</div>
					</div>
					<hr></hr>
					<div className='flex items-center text-left p-2'>
						<div className='w-44 hidden md:block'>
                        <Image
                        src={Logoclasse9}
                        alt="icons-danger"
                        className="img-logo-classe"
                        />
						</div>
						<div>
							<div className='font-semibold '>
              					Classe 9
              					</div>
							Matières et objets dangereux divers
						</div>
					</div>   
					<hr></hr>
					<div className='mt-5'>
					Vous pouvez nous confier en toute confiance vos transports de marchandises dangereuses que nos Runners qualifiés sauront transporter en toute sécurité.<br/>
					Pour cela vous pouvez nous contacter afin d'obtenir davantages d'informations .
					</div>
					<div className="flex my-5">
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
		</div>
    <Footer></Footer>
    </>
  )
}

