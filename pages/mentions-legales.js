import Header from '../components/header'
import Footer from '../components/footer'
import Head from "next/head";

export default function MentionsLégales() {
  return (
    <>
          <Head>
            <title>Road Runners - Mentions légales</title>
            <link
              rel="canonical"
              href="https://road-runners.fr/mentions-legales"
              key="canonical"
            />
            <meta
            name="description"
            content="Mentions légales de Road Runners, entreprise de transport implanter à Saint Martin du Terte (95)."
            />
          </Head>
        <Header></Header>
        <div className='max-w-screen-xl  lg:mx-auto mx-4 py-6'>

        <h1 className='text-xl font-bold mb-5 lora'>Mentions Légales</h1>
        <h2 className='text-lg font-semibold mb-2'>Idéntité de l'Entreprise</h2>

            ROAD RUNNERS<br/>
            20 RUE ROGER SALENGRO 95270 SAINT-MARTIN-DU-TERTRE<br/>
            95270 Saint Martin du Tertre<br/>
            France<br/>

            Tél. : +33 6 68 58 43 76<br/>
            www.road-runners.fr<br/>
            rrunners.transport@gmail.com<br/>

            ROAD RUNNERS possède un capital de 2 000 €<br/>
            RCS Pontoise B 948 824 651 - Siret 94882465100012 - APE : 4941B<br/>
            
        <h2 className='text-lg font-semibold mb-2 mt-3'>Conditions d’utilisation </h2>
            Ce site est accessible par les url suivants : www..netlify.app et est héberger sur Netlify. <br/>
            Le site est exploité dans le respect de la législation française.<br/>     
            Les informations contenues sur ce site sont aussi précises que possibles et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. <br/>
            Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule responsabilité. En conséquence, Road Runners ne saurait être tenu responsable d’un quelconque dommage subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives a un téléchargement.<br/>
             Ce site n'exploite aucun cookie et les informations renseignées lors d'une demande de contact ne sont pas enregistrées mais seulement envoyés par email a l'équipe de Road Runners. Les photos sont non contractuelles. 
        </div>
        <Footer></Footer>
    </>
  )
}
