import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <section className='h-screen flex justify-center items-center flex-col'>
      <h2 className='text-zinc-100 text-center  text-2xl  lg:text-6xl'>Ups hubo un error . </h2>
      <Link to={"/"} className='mt-6 text-white bg-lime-700 cursor-pointer w-36 p-2 my-10 text-xl text-center
                       hover:bg-lime-600 transition-all'>Regresar</Link>
      
    </section>
  )
}
