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
    
    <p className={`text-sm  overflow-hidden  ${more}`}>{text}</p>
    <span className='mb-8 inline-block text-sm cursor-pointer' onClick={handleChangeMoreText}>{textmore}</span>

    </>
  )
}
