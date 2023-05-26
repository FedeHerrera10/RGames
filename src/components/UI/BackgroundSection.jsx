import React from 'react'

export const BackgroundSection = ({imageBackground}) => {
  return (
    <div  
       style={{backgroundImage: `url(${imageBackground})`}}
        className='absolute top-0 bottom-0 left-0 right-0  h-full bg-no-repeat bg-cover bg-center '>
          <div className='w-full h-full bg-gradient-to-b from-zinc-800 to-zinc-900 opacity-95'></div>
      </div>
  )
}
