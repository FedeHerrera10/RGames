import React from 'react'
import { Link } from 'react-router-dom';
import useMenu from '../../hooks/useMenu';

export const CardGame = ({gameData}) => {
  
const {id,thumbnail,title,short_description,genre} = gameData;
const {menu,handleOpenSidebar} = useMenu();

  const handlerChangeSidebar =() => {
    if(menu !== 'hidden'){
      handleOpenSidebar();
    }
  }

  return (
    <Link to={`/game/${id}`} className='relative text-white w-full max-w-lg mx-auto p-2   hover:bg-zinc-500 hover:cursor-pointer
                                        transition-all group md:p-2 hover:scale-105 animate-fade' 
       onClick={handlerChangeSidebar}
    >
        <div className='relative w-full '>
            <img src={thumbnail} alt="" className='w-full'/>
            <button className=' text-white bg-zinc-600 cursor-pointer
                 absolute lg:inline-block -bottom-4   right-5 mx-auto w-12 h-8 z-20 
                 md:w-10 
               hover:bg-zinc-500 transition-all group-hover:bg-lime-700 group-hover:text-zinc-800'>
                <i className="bi bi-arrow-down-right"></i>
            </button> 
        </div>
        <div className='mt-5 flex flex-col'>
            <h3 className='mb-2 text-xl'>{title}</h3>
            <p className='mt-2 leading-7 '>{short_description}</p>
            <p className='mt-4 bg-slate-400 inline p-1 w-max self-end text-sm text-black'>{genre}</p>
        </div>
    </Link>
  )
}
