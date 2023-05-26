import React from 'react'
import { TextH4andP } from '../UI/TextH4andP';

export const DetailGame = ({detail}) => {
    
const {title,release_date,platform,developer,publisher,genre} = detail;
  return (
    <div className='grid grid-cols-2  mt-10 gap-4 '>
    
    <TextH4andP title={"Title"} description={title}/>
    <TextH4andP title={"Developer"} description={developer}/>
    <TextH4andP title={"Publisher"} description={publisher}/>
    <TextH4andP title={"Release Date"} description={release_date}/>
    <TextH4andP title={"Platform"} description={platform}/>
    <TextH4andP title={"Genre"} description={genre}/>

   </div>
  )
}
