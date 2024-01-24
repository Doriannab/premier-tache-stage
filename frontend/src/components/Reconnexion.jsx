import React from 'react';
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

function Reconnexion() {
return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-4 mx-auto inscrire" style={{backgroundColor :' #494C4F'}}>
         <div className='flex gap-4'>
            <div className=''>
            <img src={Logo} alt="" className='w-8'  />
            </div>
         <h2 className='text-2xl font-bold text-white whitespace-nowrap'>RED PRODUCT</h2>
         </div>
        
    <section className="flex w-[25rem] shadow rounded p-8 flex-col gap-12 border bg-white">
        <div className="text-xl text-black text-start">Mot de passe oublié?</div>
        <p className="text-black text-start ">Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.</p>
        <div className="w-full text-lg duration-300 transform bg-transparent border-b-2 focus-within:border-gray-500">
            <input type="text" placeholder=" Votre e-mail" className="w-full bg-transparent border-none outline-none focus:outline-none"/>
        </div>
        <button className="py-3 text-xl font-bold text-white duration-300 transform bg-gray-700 rounded hover:bg-gray-500">Envoyer</button>

    </section>
    <div className='mt-6 space-y-4 '> 
    <p className="text-lg text-center text-white">
    Revenir à la   
     <Link to="/" className="font-medium text-yellow-500 underline-offset-4 hover:underline"> Connexion</Link>
    </p>
    </div>
</main>
)
}
export default Reconnexion;





