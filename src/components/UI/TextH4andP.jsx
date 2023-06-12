import React from 'react'

export const TextH4andP = ({title,description}) => {
  return (
    <div className='zinc-300'>
      <h4 className='text-xl xl:text-2xl 2xl:text-3xl '>{title}</h4>
      <p className='text-sm xl:text-md 2xl:text-xl leading-12'>{description}</p>
     </div> 
  )
}
