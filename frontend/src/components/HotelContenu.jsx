import React, { useEffect, useState } from 'react';
import { useNavigate, navigate } from 'react-router-dom';
import { getUserDetails } from './util/GetUser';
import   {getErrorMessage }  from './util/GetError';
import ToDoServices from './services/toDoServices';
import { message } from 'antd';


function HotelContenu () {
  const navigate = useNavigate();
  const [hotel, setHotel] = useState([])
console.log('hotel',hotel);
  useEffect(() => {
    const user = getUserDetails().userId; // Utilisation de ? pour éviter les erreurs si userData est null ou undefined
      const getAllToDo = async () => {
        try {
          const response = await ToDoServices.getAllToDo(user);
          setHotel(response.data);
        } catch (err) {
          if (err.response && err.response.status === 403) {
            console.log("Erreur d'autorisation : Token invalide ou expiré");
            navigate('/template/hotel'); // Rediriger vers la page de connexion en cas d'erreur d'autorisation
          } else {
            console.log("Erreur lors de la récupération des tâches :", err);
            message.err(getErrorMessage(err));
          }
        }
      };
      if (user) {
      getAllToDo();
    } else {
      navigate('/template/hotel'); // Rediriger vers la page de connexion si les informations de l'utilisateur ou le token ne sont pas disponibles
    }
  }, []); 
   
        return (
         
          <div className="">
      {hotel && hotel.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {hotel.map((hotel, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
            >
              <img
                className="rounded-t-lg"
                src={`http://localhost:5000/api/uploads/${hotel.image}`}
                alt={hotel.name}
              />
              <div className="p-2">
                <p className="text-xs text-[#8D4B38]">{hotel.address}</p>
                <h5 className="text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {hotel.name}
                </h5>
              </div>
              <div className="px-2 py-2 mb-8 text-left border-t-2 border-neutral-100 dark:border-neutral-600 dark:text-neutral-50">
                <small>{hotel.price}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    
            

        );
    }


export default HotelContenu;



