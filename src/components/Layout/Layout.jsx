import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import useGames from '../../hooks/useGames'
import { Spinner } from '../UI/Spinner'

export const Layout = () => {
 const  {loading}=useGames()
  return (
    <div className='bg-zinc-900 min-h-min'>
      <Navbar/>
      {
        loading 
        ? 
          <div className='flex justify-center items-center h-screen'>
            <Spinner/> 
          </div>
        : 
        <>
        <Outlet/>
        </>
      }
    </div>
  )
}
