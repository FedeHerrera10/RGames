import React from 'react'
import { SectionDetailsGame } from './SectionDetailsGame'
import { TextH4andP } from '../UI/TextH4andP'

export const SectionMinumumRequirements = ({minimum_system_requirements}) => {
    const {os,processor,memory,graphics,storage} = minimum_system_requirements;
    
  return (
    Object.keys(minimum_system_requirements).length > 0 &&
    <SectionDetailsGame title="Minimum System Requirements">
    <div className='grid grid-cols-2  mt-10 gap-4 animate-fade'>
      <TextH4andP title={"Os"} description={os}/>
      <TextH4andP title={"Procesor"} description={processor}/>
      <TextH4andP title={"Memory"} description={memory}/>
      <TextH4andP title={"Graphics"} description={graphics}/>
      <TextH4andP title={"Storage"} description={storage}/>
    </div>
  </SectionDetailsGame>
  )
}
