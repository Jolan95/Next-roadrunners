import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Head from 'next/head'
export default function PlanSite() {
  return (
    <>
    	<Head>
  <title>Road Runners - Plan du site</title>
  <link
    rel="canonical"
    href="https://road-runners.fr/plan-site"
    key="canonical"
  />
  <meta
  name="description"
  content="Road Runners, plan du site : Accueil - Transport - Zone d'intervention - Demenagement - Contact - Matieres Dangereuses - Mentions Legales - Plan du Site."
  />
  </Head>
        <Header></Header>
        <div className="mx-4 max-w-screen-xl  py-6 plan-site">
            <h1 className='text-xl font-bold mb-5 lora'>Plan du Site</h1>
            <div>
            <div className='wrapper-link-plan'>
                <Link href="/"><span>Accueil</span></Link>
            </div>
            </div>
            <div className='wrapper-link-plan'>
                <Link href="/transport"><span>Transport</span></Link>
            </div>
            <div className='wrapper-link-plan'>
                <Link href="/area"><span>Zone d'intervention</span></Link>
            </div>
            <div className='wrapper-link-plan'>
                <Link href="/demenagement"><span>Déménagement</span></Link>
            </div>
            <div className='wrapper-link-plan'>
                <Link href="/contact"><span>Contact</span></Link>
            </div>
            <div className='wrapper-link-plan'>
                <Link href="/matieres-dangereuses"><span>Matières dangereuses</span></Link>
            </div>
            <div className='wrapper-link-plan'>
                <Link href="/mentions-legales"><span>Mentions légales</span></Link>
            </div>
            <div className='wrapper-link-plan'>
                <Link href="/plan-site"><span>Plan du site</span></Link>
            </div>
        </div>
        <Footer></Footer>
    </>

  )
}
