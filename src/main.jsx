import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './components/Layout/Layout';
import { GamesProvider } from './context/GamesProvider';
import './index.css';
import { SearchPage } from './components/pages/SearchPage';
import { GameDetailPage } from './components/pages/GameDetailPage';
import { MenuProvider } from './context/MenuProvider';
import { Index } from './components/pages/Index';
import { ErrorPage } from './components/pages/ErrorPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Index />,
        errorElement:<ErrorPage/>
        
      },
      {
        path: '/genre/:filter',
        element: <SearchPage />,
        errorElement:<ErrorPage/>
        
      },
      {
        path: '/platform/browser/genre/:filter',
        element: <SearchPage />,
        errorElement:<ErrorPage/>
      },
      {
        path: '/game/:id',
        element: <GameDetailPage />,
        errorElement:<ErrorPage/>
      },
    ],
    errorElement:<ErrorPage/>
  },
])




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <MenuProvider>
    <GamesProvider>
      <RouterProvider router={router} />
      </GamesProvider>
    </MenuProvider>
  </React.StrictMode>
)
