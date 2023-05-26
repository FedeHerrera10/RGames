import React from 'react'

export const TextH4andP = ({title,description}) => {
  return (
    <div className='zinc-300'>
      <h4 className='text-xl xl:text-2xl '>{title}</h4>
      <p className='text-sm xl:text-md'>{description}</p>
     </div> 
  )
}
