
import { useState } from 'react'

export default function Form(props) {
    
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [preference, setPreference] = useState("telephone")
    const [message, setMessage] = useState("")
    const [check, setCheck] = useState(false);
    const [alert, setAlert] = useState({message: "", type : null}) 
    const [loading, setLoading] = useState(false)
    

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(name && phone && email){
            if(check){
                setLoading(true)
                setTimeout( ()=>{

                    var myInit = { 
                        method: 'POST',
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({name, phone, email, message, preference, check})
                }
                fetch("https://road-runners.herokuapp.com/mail",myInit)
                .then(res => res.json())
                .then((response) => {
                    setLoading(false)
                    setAlert({message : "Votre demande de contact a été envoyé avec succès, Road Runners vous recontactera dans les plus brefs délais ! Merci de votre confiance et à bientôt !" , type:"SUCCESS"})
                    console.log(response)
                }
                ).catch(err => {
                    setAlert({message : err.message , type:"ERROR"})
                    setLoading(false)
                    console.log(err)
                })
            }, 2000)
            }else {
                setAlert({message : "Veuillez accepter le traitement de vos informations personnelles", type:"ERROR"})
            }
        } else {
            setAlert({message : "Veuillez renseigner les information obligatoires.", type:"ERROR"})
        }
    }

  return (
<>

        <span className={' block  rounded w-fit mt-2 '+(alert.type === null || loading? "hidden  p-3 text-white " : (alert.type === "ERROR"? "bg-red-500 text-white p-3" : " text-"+props.color+" pr-3 md:pr-10"))}>{alert.message}</span>
   <div className={(alert.type !== "SUCCESS"? "block" : "hidden") + ' wrapper-form '}>
        <form  onSubmit={(e) => {handleSubmit(e)}}> 
            <div className='mt-2'>   
                <div>Nom*</div>
                <input  className='text-black w-80 h-8 rounded p-2' type="name" required onChange={(e)=> {setName(e.target.value)}} placeholder="Nom complet"></input>
            </div>
            <div className='mt-2'>
                <div>Telephone*</div>
                <input className='text-black w-80 h-8 rounded p-2' type="tel" required onChange={(e)=> {setPhone(e.target.value)}} placeholder="Numéro de téléphone"></input>
            </div>
            <div className='mt-2'>
                <div>Email*</div>
                <input  className='text-black w-80 h-8 rounded p-2' type="email" required onChange={(e)=> {setEmail(e.target.value)}} placeholder="Email"></input>
            </div>
            <div className='mt-2'>
                <div>Message</div>
                <textarea className='text-black  h-40 rounded p-2' type="textarea" onChange={(e)=> {setMessage(e.target.value)}} placeholder="Votre message (facultatif)"></textarea>
            </div>
            <div className='my-2'>
                <div>Je préfère être contacté par :</div>
                <input type="radio" selected onChange={(e)=> {setPreference("telephone")}} name="contact" value="email"/><label className='pl-1'>Telephone</label>
                <input type="radio" className='ml-2'  onChange={(e)=> {setPreference("email")}} name="contact" value="email"/><label className='pl-1'>Email</label>
            </div>
            <div className='my-2 text-sm md:text-md'>
                <input className='mr-1' type="checkbox" onClick={()=> {setCheck(!check)}}></input>J'accepte mes données soient traitées par Road Runners et d'être contacté
            </div>
            <button  type='submit' disabled={loading ? true : false} className={(loading? "bg-slate-600 text-slate-100" : "bg-cyan-600")+' rounded text-white py-2 px-4'}>
                <div className={(!loading? "block" : "hidden" )}>Envoyer</div>
                <div className={(loading? "loader" : "hidden" )}></div>
            </button>

        </form>
    </div>
</>
  )
}
