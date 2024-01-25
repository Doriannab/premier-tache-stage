import { MdPhotoCamera } from "react-icons/md";
import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";

function Modal() {
const [name,setName] = useState("");
const [address,setaddress] = useState("");
const [username,setUsername] = useState("");
const [number,setNumber] = useState("");
const [price,setPrice] = useState("");
const [devise,setDevise] = useState("");
const [adding, setAdding] = useState(false);



    const [formData, setFormData] = useState({ 
        hotelName: '', 
        address: '', 
        email: '', 
        phoneNumber: '',
        price: '',
        currency: 'F XOF',
        image: null,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleInputChange = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({ ...formData, image: file });
    };

    const handleSubmit = (event) => {
        event.preventDefault(event);
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="fixed inset-0 flex items-center w-full h-full bg-white bg-opacity-25">
            <section className="relative items-center justify-center p-6 mx-auto bg-white rounded-md shadow-md overflow">
                <div className="flex items-center gap-2">
                    <button onClick={closeModal} className="">
                        <FaArrowLeft className="w-8" />
                    </button>
                    <h1 className="text-xl font-bold text-black capitalize dark:text-black">CREER UN NOUVEAU HOTEL</h1>
                </div>
                <p className="mt-2 border-b-2 border-gray-500 border-dashed">  </p>
                <form onSubmit={handleSubmit}>
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
                                onChange={(e) => handleInputChange('hotelName', e.target.value)}
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
                                onChange={(e) => handleInputChange('address', e.target.value)}
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
                                value={username}
                                onChange={(e) => handleInputChange('email', e.target.value)}
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
                                value={number}
                                onChange={(e) => handleInputChange('numero', e.target.value)}
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
                                onChange={(e) => handleInputChange('price', e.target.value)}
                            />
                        </div>

                        <div>
                  <label className="text-black dark:text-gray-200" >
                    Devise
                  </label>
                  <select
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={devise}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
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
                                            type="file"
                                            value={adding}
                                            className="border-white sr-only border-White"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-6">
                        <button
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
