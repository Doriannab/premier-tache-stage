import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../assets/logo.png"
import {ToastContainer } from 'react-toastify';
import {Input, message} from 'antd';
import AuthServices from './services/authServices';
import { getErrorMessage } from './util/GetError';




function Connection() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
       
        try{
            // setLoading(true);
            let data = {
                email,
                password
            }
            const response = await AuthServices.loginUser(data);
            console.log(response.data);
            message.success("Logged in Successfully!");
            navigate('/template')
            localStorage.setItem('toDOAppUser',JSON.stringify(response.data));  
            setLoading(false);

        }catch(err){
            console.log(err);
            message.error(getErrorMessage(err));
            setLoading(false);

        }
    }

   
return (
    <main className="flex flex-col items-center justify-center w-full h-full gap-3 mx-auto inscrire bg-connect"  style={{backgroundColor :' #494C4F'}}>
    <div className='flex gap-4'>
       <div className=''>
       <img src={Logo} alt="" className='w-8'  />
       </div>
    <h2 className='text-2xl font-bold text-white whitespace-nowrap text-opacity-3'>RED PRODUCT</h2>
    </div>
<section className="flex w-[25rem] shadow rounded p-8 flex-col gap-12 border bg-white" onSubmit={(e) =>handleSubmit(e)}>
   <div className="text-2xl text-center text-black font">Connectez-vous en tant que Admin</div>
   <div className="w-full text-lg duration-300 transform bg-transparent border-b-2 focus-within:border-gray-500">
       <Input type="text" placeholder="E-mail" value={email} className="w-full bg-transparent border-none outline-none focus:outline-none" onChange={(e) =>setEmail(e.target.value) }/>
   </div>
   <div className="w-full text-lg duration-300 transform bg-transparent border-b-2 focus-within:border-gray-500">
       <Input type="password" placeholder="Mot de passe" value={password}
       className="w-full bg-transparent border-none outline-none focus:outline-none" onChange={(e) =>setPassword(e.target.value)}/>
   </div>
       <div className='text-xl text-black'> 
       <div className="flex items-center h-5 gap-2 ">
   <Input id="hs-list-group-item-checkbox-2" name="hs-list-group-item-checkbox-2" 
    type="checkbox" className="w-6 h-6 border-gray-200 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
   Gardez-moi Connecter
 </div>
   </div>
   <button loading={setLoading ? 'loading' : ''} className="py-3 text-xl font-bold text-center text-white duration-300 transform bg-gray-700 rounded hover:bg-gray-500"
   onClick={handleSubmit} disabled={!email || !password}>
   Se Connecter 
   </button>
</section>
<div className='space-y-4 text-center '> 
<Link to="/reconnexion" className="font-bold text-center text-yellow-500 duration-300 transform hover:underline">Mot de passe oublié?</Link>

<p className="text-lg text-center text-white">
Vous n'avez pas de compte?
<Link to="/inscription" className="font-medium text-yellow-500 underline-offset-4 hover:underline">Incrivez-vous</Link>
</p>
</div>
<ToastContainer />
</main>
   

 )
};
export default Connection;