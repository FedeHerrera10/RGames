import React from 'react'
import { SectionDetailsGame } from './SectionDetailsGame'

export const SectionScreenshots = ({title,screenshots,handleClickImage}) => {
  return (
    <SectionDetailsGame title={`${title} Screenshots`} className="w-full">
          <div className='grid grid-cols-2 gap-3'>
            {
                screenshots.map((scr,index) => (
                   <img key={index} src={scr.image} className='rounded-md border border-zinc-900 cursor-pointer ' onClick={handleClickImage} alt='screenshoot'/>
                 ))
            }
          </div>
        </SectionDetailsGame>
  )
}
