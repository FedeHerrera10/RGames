import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from '../UI/Spinner';
import useGames from '../../hooks/useGames';

export const Hero = ({game}) => {
const{gameHero}=useGames();
const {screenshots,title,short_description,release_date,platform} = gameHero;
console.log(gameHero)
const urlToGame = `/game/${game.id}`;
const navigate =useNavigate();

const handleOnClick = ()=>{
 navigate(urlToGame)
}


return (
  Object.keys(gameHero).length > 0  &&
  
            <div className=' mt-5 relative w-11/12 mx-auto h-[80vh] flex content-center justify-center lg:flex lg:flex-row lg:justify-center 
                             lg:min-h-[500px] lg:max-h-[600px] xl:max-w-[1800px] rounded border border-zinc-900 box-border	'>
            
            <div className='text-zinc-400 p-10 flex flex-col justify-end content-center 
            absolute z-10 bottom-16 top-0  max-w-xl md:max-w-2xl 
            lg:relative lg:gap-1 lg:justify-center lg:px-4 overflow-hidden lg:basis-1/3 grow 
            '>
                <h2 className='text-4xl my-2  lg:text-4xl xl:text-5xl 2xl:text-6xl text-white cursor-pointer' onClick={handleOnClick}>Released New {title}</h2>
                <p className='md:text-xl md:my-4 lg:leading-8 '>{short_description}</p>
                <div className='py-3 flex  lg:my-12 lg:px-2 justify-center lg:py-0'>
                  <p className=' md:text-xl text-center inline-block '>{platform}</p>
                  <p className=' md:text-xl basis-0 grow text-center'>{release_date}</p>
                </div> 
            </div>
            <img src={screenshots[1].image} alt="" className='w-full h-full object-cover lg:w-3/5 rounded xl:w-[70%] absolute lg:relative' />
            <Link className='hidden text-white bg-lime-700 cursor-pointer
                         absolute lg:inline bottom-10 mx-auto w-36 p-2
                         lg:left-[30%] xl:left-[27%]
                         z-20  
                       hover:bg-lime-600 transition-all' to={urlToGame} >
                <i className="bi bi-arrow-down-right px-2"></i>
                View More
              </Link> 
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-zinc-800 opacity-60 '></div> 
            </div>
  )
}
