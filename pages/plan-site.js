import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
export default function PlanSite() {
  return (
    <>
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
                <Link href="/zone-intervention"><span>Zone d'intervention</span></Link>
            </div>
            <div className='wrapper-link-plan'>
                <Link href="/demenagement"><span>Déménagement</span></Link>
            </div>
            <div className='wrapper-link-plan'>
                <Link href="/devis"><span>Contact</span></Link>
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
