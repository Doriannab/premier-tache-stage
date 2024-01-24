import {
    createBrowserRouter,
    RouterProvider,
    // Navigate,
  } from 'react-router-dom';
  import '../App.css';
  import Connection from '../components/Connection';
 import Inscription from '../components/inscription';
 import Reconnexion from '../components/Reconnexion';
 import Template from './Template';
import Dashboard from '../components/Dashboard';
import Hotel from '../components/Hotel';

  
  
  
  export default function ProtectRoutes() {
   
    const router =   createBrowserRouter([
          {
            path: "/",
            element: <Connection/>,
          },
          {
            path: "/inscription",
            element: <Inscription />,
          },
          {
            path: '/reconnexion',
            element: <Reconnexion />,
          },
          {
            path: '/template',
            element: <Template />,
            children: [
              {
                // path: '/template/dashboard',
                index: true,
                element: <Dashboard />,
              },


              {
                path: '/template/hotel',
                element: <Hotel />,
              },
            ]


          },
          
        ]);
   
  
    return <RouterProvider router={router} />;
  }
  