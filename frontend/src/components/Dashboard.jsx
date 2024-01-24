import React from 'react';
import {AiTwotoneMail} from "react-icons/ai";
  import { HiMiniUsers } from "react-icons/hi2";
  import { FaProductHunt } from "react-icons/fa";

  function Card1({ heading, description, icon, className }) {
    return (
      <div className="flex w-full gap-4 p-2 bg-white shadow-sm rounded-xl">
      <div className={`w-12 h-12 mt-2 rounded-full text-center ${className}`}>
        <div className="rounded-full min-w-max">{icon}</div>
        </div>
        <div className="">
          <h3 className="text-[22px] font-semibold text-left">{heading}</h3>
          <p className="font-normal leading-8 text-gray-500 ">{description}</p>
        </div>
      </div>
    );
  }


function Dashboard () {
  const cardData = [
    { 
  
heading: '125 Formulaires',
 description: 'Je ne sais pas quoi mettre.', 
 icon: <AiTwotoneMail size="1rem" className="mt-4 ml-4 text-white" />,
 className: "bg-[#A88ADD]"
 },
   
    { 
heading: '40 Messages',
 description: 'Je ne sais pas quoi mettre.', 
 icon: <FaProductHunt size="1rem" className="mt-4 ml-4 text-white" />,
 className: "bg-[#0CC2AA] "
 },

  
    { 
heading: '600 Utilisateurs',
 description: 'Je ne sais pas quoi mettre.',
  icon: <HiMiniUsers size="1rem" className="mt-4 ml-4 text-white" />,
  className: "bg-[#FCC100] "
},
  
  { 
  
    heading: '25 E-mails',
     description: 'Je ne sais pas quoi mettre.', 
     icon: <AiTwotoneMail size="1rem" className="mt-4 ml-4 text-white" />,
     className:'bg-[#F90000]'
     },
     { 
      heading: '40 Hôtels',
       description: 'Je ne sais pas quoi mettre.', 
       icon: <FaProductHunt size="1rem" className="mt-4 ml-4 text-white" />,
       className:'bg-[#9C27B0]'
       },
       { 
        heading: '02 Entités',
         description: 'Je ne sais pas quoi mettre.',
          icon: <HiMiniUsers size="1rem" className="mt-4 ml-4 text-white" />,
          className:'bg-[#1565C0]'
         },
          
         
  ];
   
        return (
          <div className='w-full py-10 bg-gray-200 h-60 lg:h-screen'>
            <div className="w-full scrolled lg:w-full overflow sm:w-full">
               {/* <div className="w-full h-16 mt-12 bg-white lg:h-20 lg:w-full ">
                <h2 className="mt-4 ml-10 text-xl text-black lg:text-4xl lg:ml-20 ">Bienvenue Sur RED Product</h2>
                <p className="mb-24 ml-10 text-sm text-black lg:mb-24 lg:ml-20">Lorem ipsum dolor sit amet consectetur</p>
               </div> */}


               <div className="grid h-full grid-cols-1 gap-8 bg-gray-200 pb-28 lg:w-full md:p-6 overflow md:grid-cols-3 xl:grid-cols-3 sm:p-3 sm:w-full md:w-full">
               {cardData.map((card, index) => (
          <Card1
            key={index}
            className={card.className}
            heading={card.heading}
            description={card.description}
            icon={card.icon}
          />
        ))}

      
    </div>

               
            </div>
            </div>
        );
    }
;

export default Dashboard;