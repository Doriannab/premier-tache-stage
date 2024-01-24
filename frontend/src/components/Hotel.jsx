import React, { useState } from 'react';
import { MdPhotoCamera } from "react-icons/md";
import HotelContenu from './HotelContenu';  

function Hotel() {
    const [isModalOpen, setIsModalOpen] = useState(false);
// eslint-disable-next-line
   

    
const closeModal = () => {
setIsModalOpen(false);
    };



    const [formData, setFormData] = useState({ hotelName: '', address: '', email: '',phoneNumber: '',
 price: '',currency: 'F XOF',image: null,
      });
    
      
     
    const inputFields = [
        { 
        
    key: 'hotelName', label: "Nom de l'hotel", type: 'text' },
       
        {
    key: 'address', label: 'Address', type: 'text' },
        { 
        
    key: 'email', label: 'E-mail', type: 'email' },
        { 
        
    key: 'phoneNumber', label: 'Numero Téléphone', type: 'number' },
        { 
        
    key: 'price', label: 'Prix par nuit', type: 'text' },
      ];
    
    
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
          <div className="w-full bg-gray-200 h-60 lg:h-screen ">
            <div className="w-full h-full smt-20 lg:h-full scrolled overflow lg:w-full">
               {/* <div className="fixed w-full gap-6 bg-white scrolled smt-20 overflow sm:w-full">
               <div className="flex w-full h-24 gap-6 lg:w-full">
                <h2 className="text-6xl text-black lg:ml-24 ">Hôtels</h2>
                <p className="text-6xl text-black opacity-25 ">8</p>
                <div className='relative flex items-center'>
                <p onClick={openModal} className="w-40 p-2 text-sm text-black border cursor-pointer h-14 lg:h-12 lg:w-56 lg:ml-96 border-black-900 border-1">+ Créer un nouveau hôtel</p>
                </div>
                </div>
               </div> */}

             
           
               <div className='w-full bg-gray-200 lg:w-full'>
               <HotelContenu isModalOpen={isModalOpen} closeModal={closeModal}/>
               {isModalOpen && (
                           
               <div>
                


                <section className="fixed items-center justify-center max-w-3xl p-6 mx-auto bg-white rounded-md shadow-md lg:w-4/5 scrolled top dark:bg-gray-800">
    <h1 className="text-xl font-bold text-black capitalize dark:text-black">CREER UN NOUVEAU HOTEL</h1>
    <p className="mt-2 border-b-2 border-gray-300 border-dashed">  </p>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        {inputFields.map((field) => (
          <div key={field.key}>
            <label className="text-black dark:text-gray-200" htmlFor={field.key}>
              {field.label}
            </label>
            <input
              id={field.key}
              type={field.type}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              value={formData[field.key]}
              onChange={(e) => handleInputChange(field.key, e.target.value)}
            />
          </div>
        ))}

        <div>
          <label className="text-black dark:text-gray-200" htmlFor="Devise">
            Devise
          </label>
          <select
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            value={formData.currency}
            onChange={(e) => handleInputChange('currency', e.target.value)}
          >
            <option>F XOF</option>
            <option>Dollar</option>
            <option>Euro</option>
          </select>
        </div>

        <div>
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
                    className="border-white sr-only border-White"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
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
        <button
          onClick={closeModal}
          className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-500 rounded-md"
        >
          Fermer
        </button>
      </div>
    </form>

</section>

 
                </div>
                
            )}
        
               </div>
              
               </div>
               </div>
        );
    
}

export default Hotel;