import React from 'react';



const hotels = [
  {
    
name: 'Hôtel Terrou-Bi',     
location: 'Boulevard Marthin Luther King Dakar, 11500',  
image: 'https://tecdn.b-cdn.net/img/new/standard/city/044.webp',
price: '25000 XOF par nuit',
  },
  {
 
name: 'King Fahd Palace',
location: 'Rte des Almadies, Dakar',   
image: 'https://tecdn.b-cdn.net/img/new/standard/city/043.webp',   
price: '20000 XOF par nuit',
  },
  {
name: 'Radisson Blu Hôtel',  
location: 'Rte de la corniche 0, 16868',  
image: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',   
price: '22000 XOF par nuit',
  },
  {   
name: 'Pullman Dakar Teranga',
    
location: 'Place de l\'independance, 10 Rue PL 29, Dakar',    
image: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',   
price: '30000 XOF par nuit',
  },

  {
    
    name: 'Hôtel Terrou-Bi',     
    location: 'Boulevard Marthin Luther King Dakar, 11500',  
    image: 'https://tecdn.b-cdn.net/img/new/standard/city/044.webp',
    price: '25000 XOF par nuit',
      },
      {
     
    name: 'King Fahd Palace',
    location: 'Rte des Almadies, Dakar',   
    image: 'https://tecdn.b-cdn.net/img/new/standard/city/043.webp',   
    price: '20000 XOF par nuit',
      },
      {
    name: 'Radisson Blu Hôtel',  
    location: 'Rte de la corniche 0, 16868',  
    image: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',   
    price: '22000 XOF par nuit',
      },
      {   
    name: 'Pullman Dakar Teranga',
        
    location: 'Place de l\'independance, 10 Rue PL 29, Dakar',    
    image: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',   
    price: '30000 XOF par nuit',
      },
];





function HotelContenu () {
   
        return (
         
          <div className="w-full h-full grid-cols-2 pb-20 bg-gray-200 lg:pb-12 lg:h-full sm:grid md:grid-cols-4 lg:w-full">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0"
          >
            <a href="#!">
              <img
                className="rounded-t-lg"
                src={hotel.image}
                alt={hotel.name}
              />
            </a>
            <div className="p-2">
              <p className="text-xs text-neutral-600 text-[#8D4B38]">
                {hotel.location}
              </p>
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
    
            

        );
    }


export default HotelContenu;