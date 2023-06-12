import React, { useState } from 'react'

export const TextLessAndMore = ({text}) => {
    const [more,setMore] = useState('h-20')
    const [textmore,setTextMore]= useState('Read More +');

    const handleChangeMoreText = ()=> {
        if(more === 'h-20'){
          setMore('h-auto');
          setTextMore('Read Less -')
          return;
        } 
    
        setMore('h-20');
        setTextMore('Read More +')
    
      }

  return (
    <>
    
    <p className={`text-sm xl:text-md 2xl:text-xl overflow-hidden leading-8
 ${more}`}>{text}</p>
    <span className='mb-8 inline-block text-sm cursor-pointer  xl:text-md 2xl:text-xl' onClick={handleChangeMoreText}>{textmore}</span>

    </>
  )
}
