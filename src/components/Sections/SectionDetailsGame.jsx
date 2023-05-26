import React from 'react'

export const SectionDetailsGame = (props) => {
    const {title} = props; 
  return (
    <section className=''>
        <h2 className='text-3xl text-center my-6'>{title}</h2>
           {props.children}           
    </section>
  )
}
