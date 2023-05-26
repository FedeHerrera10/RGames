import React, { useState } from 'react'
import {  useParams } from 'react-router-dom';
import useGames from '../../hooks/useGames';
import { useEffect } from 'react';
import { SectionDetailsGame } from '../Sections/SectionDetailsGame';
import { Modal } from '../UI/Modal';
import { DetailGame } from '../Sections/DetailGame';
import { BackgroundSection } from '../UI/BackgroundSection';
import { TextLessAndMore } from '../UI/TextLessAndMore';
import { SectionMinumumRequirements } from '../Sections/SectionMinumumRequirements';
import { SectionScreenshots } from '../Sections/SectionScreenshots';



export const GameDetailPage = () => {
  const {setIdGame,game} =  useGames();
  const [openModal,setOpenModal]=useState(false);
  const [imageSelect,setImageSelect]=useState('');
  let { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0)
    setIdGame(id)
  }, [])
  
  const{title,description,thumbnail} = game;
  const minimum_system_requirements = game.minimum_system_requirements || {}
  
  
  const handleClickImage = e=> {
    setOpenModal(!openModal)
    setImageSelect(e.target.attributes.src.nodeValue)
  }
 
  return (

    <>
    
    {

      Object.keys(game).length > 0  &&
      <>
      <BackgroundSection imageBackground={game.screenshots[1].image}/>
      <div className='relative w-full  flex flex-col content-center justify-center p-6 
      max-w-2xl mx-auto text-zinc-400 md:flex-row md:max-w-[90%] md:gap-8 xl:max-w-[80%]  
      '>
        <div className='w-full md:max-w-xs lg:max-w-md  xl:sticky xl:top-28 xl:h-full' >
        <SectionDetailsGame title={title} >
          <img src={thumbnail} alt={title} className='w-full rounded-md border border-zinc-900'/>
        </SectionDetailsGame>
        </div>
        <div className='w-full  '>
        <SectionDetailsGame title={`About ${title}`}>
          <TextLessAndMore text={description}/>
        </SectionDetailsGame>

        <SectionDetailsGame title="Aditional Information">
          <DetailGame detail={game}/>
        </SectionDetailsGame>
          
        <SectionScreenshots title={`${title} Screenshots`} screenshots={game.screenshots} handleClickImage={handleClickImage}/>
        <SectionMinumumRequirements minimum_system_requirements={minimum_system_requirements}/>
        </div>
        
      </div>

      </>
    }
    
    {openModal &&<Modal  srcImage={imageSelect} setOpenModal={setOpenModal}/>}
    </>

  )
}
