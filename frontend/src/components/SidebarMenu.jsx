// Menu.js
import React from 'react';
import { MdDashboard } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

function SidebarMenu() {
  return (
    <div className="flex flex-col h-full gap-4 pl-2 max-md:flex-row t-2 ">
      <div className="flex items-center">
        <img src={Logo} alt="" className="w-8" />
        <h1 className='text-2xl font-bold whitespace-nowrap text-opacity-20'>RED PRODUCT</h1>
      </div>
      <div className="flex ">
        <ul className="gap-12 text-sm max-md:flex">
          <li className="pt-8 pb-4 rounded max-md:hidden ">
            <p className="flex items-center space-x-3 text-base rounded-md">
              Principal
            </p>
          </li>
          <Link to="/template">
          <li className="rounded hover:bg-gray-200 hover:text-gray-700 max-md:flex max-md:items-center max-md:space-x-3 ">
            <p className="flex items-center p-1 space-x-2 rounded-md hover:w-full">
              <MdDashboard className="w-5 h-5 ml-10 fill-current lg:ml-0 dark:text-grey-400 max-md:w-10 max-md:h-10"/>
              <span className="p-1 text-xl hover:text-gray-700 hover:lg:w-full max-md:hidden ">Dashboard</span>
            </p>
          </li>
          </Link>
          <Link to="/template/hotel">
          <li className="rounded-sm w-80 hover:bg-gray-200 hover:text-gray-700">
            <p className="flex items-center p-1 space-x-2 rounded-md">
              <RiHotelLine className="w-5 h-5 fill-current dark:text-gray-400 max-md:w-10 max-md:h-10"/>
              <span className="p-1 text-xl hover:text-gray-700 hover:rounded-screen max-md:hidden max-md:p-0">Listes des Hotels</span>
            </p>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SidebarMenu;
