import React from 'react'

export const Modal = ({srcImage,setOpenModal}) => {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 z-50 w-full h-full bg-zinc-900 flex justify-center content-center flex-col' onClick={()=>setOpenModal()}>
        <button className='text-4xl text-white  mr-6' onClick={()=>setOpenModal()}> x</button>
        <img src={srcImage} alt="image" className='w-full p-2 md:max-w-4xl mx-auto rounded-md border border-zinc-900' />
    </div>
  )
}
