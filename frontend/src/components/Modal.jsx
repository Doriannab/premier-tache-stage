import { MdPhotoCamera } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { message } from "antd";
import { getErrorMessage } from "./util/GetError";
import { getUserDetails } from "./util/GetUser";
import ToDoServices from "./services/toDoServices";

function Modal() {
const [name,setName] = useState("");
const [address,setAddress] = useState("");
const [email,setEmail] = useState("");
const [tel,setTel] = useState("");
const [price,setPrice] = useState("");
const [devise,setDevise] = useState("");
const [image,setImage] = useState("");
const [adding, setAdding] = useState(false);
const [loading, setLoading] = useState(false);


const handleApi = async () => { 
    setLoading(true);
    try{
        const userId = getUserDetails()?.userId;
        const data = {
            name,
            address,
            email,
            tel,
            price,
            devise,
            image,
            userId:userId

        }
        const response = await ToDoServices.createToDo(data)
        console.log(response.data);
        setLoading(false);
        message.success('Ajout hotel reussi !');
        setAdding(false)
    }catch(err){
        console.log(err);
        setLoading(false)
        message.error(getErrorMessage(err));

    }

}


useEffect(() =>{
    if(!localStorage.getItem('token')){
        Navigate('/login');
    }
}, [])


   

   

    

    return (
        <div className="fixed inset-0 flex items-center w-full h-full bg-white bg-opacity-25">
            <section className="relative items-center justify-center p-6 mx-auto bg-white rounded-md shadow-md overflow">
                <div className="flex items-center gap-2">
                    <button open={loading} onCancel={()=>setAdding(true)} className="">
                        <FaArrowLeft className="w-8" />
                    </button>
                    <h1 className="text-xl font-bold text-black capitalize dark:text-black">CREER UN NOUVEAU HOTEL</h1>
                </div>
                <p className="mt-2 border-b-2 border-gray-500 border-dashed">  </p>
                <form onSubmit={handleApi}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-black ">
                                Nom de l'hotel
                            </label>
                            <input
                                id="hotelName"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                            />
                        </div>

                        <div>
                            <label className="text-black dark:text-gray-200">
                                Address
                            </label>
                            <input
                                id="address"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                value={address}
                                onChange={(e) => {setAddress(e.target.value)}}
                            />
                        </div>
                        <div>
                            <label className="text-black dark:text-gray-200">
                                E-mail
                            </label>
                            <input
                                id="e-mail"
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                        </div>

                        <div>
                            <label className="text-black dark:text-gray-200" htmlFor="hotelName">
                                Numero
                            </label>
                            <input
                                id="number"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                value={tel}
                                onChange={(e) => {setTel(e.target.value)}}
                            />
                        </div>
                        <div>
                            <label className="text-black dark:text-gray-200">
                                Prix par nuit
                            </label>
                            <input
                                id="price"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                value={price}
                                onChange={(e) => {setPrice(e.target.value)}}
                            />
                        </div>

                        <div>
                  <label className="text-black dark:text-gray-200" >
                    Devise
                  </label>
                  <select
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={devise}
                    onChange={(e) => {setDevise(e.target.value)}}
                  >
                    <option>F XOF</option>
                    <option>Dollar</option>
                    <option>Euro</option>
                  </select>
                </div>
                        {/* Repeat this structure for other input fields */}
                    </div>
                    <div className="pt-8">
                        <label className="block text-sm font-medium text-black">Ajouter une photo</label>
                        <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md ">
                            <div className="w-full space-y-1 text-center">
                                <MdPhotoCamera className="w-12 h-12 mx-auto text-black opacity-50" />
                                <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative font-medium bg-white rounded-md cursor-pointer text-white-600 hover:text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                    >
                                        <span className="ml-20 text-center text-black">Ajouter une photo</span>
                                        <input
                                            id="file-upload"
                                            name="file-upload"
                                            value={image}
                                            type="file"
                                            className="border-white sr-only border-White"
                                            onChange={(e) => {setImage(e.target.files[0])}}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-6">
                        <button
                        onClick={()=>handleApi(true)}
                        value={adding}
                            type="submit"
                            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600"
                        >
                            Enregister
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Modal;
