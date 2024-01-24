import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';


function Template () {
    return(
        <div  className='flex w-full bg-gray-200 max-md:flex-col md:w-full'>
        <div className='bottom-0 left-0 lg:w-1/5 max-md:w-full lg:mt-0 mt-96'>
        <Sidebar/>
        </div>
        <div className='right-0 w-4/5 max-md:w-full max-md:order-first '>
        <div className=''>
        <Navbar/>
        </div>
        <div className='w-full mt-10 bg-gray-200 md:w-full '>
        <Outlet/>
        </div>
        </div>
        </div>
    )
}
    

export default Template;