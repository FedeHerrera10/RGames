import React from 'react'
import {platforms,genres,sortbyFilter} from '../../Data/filters'
import { SelectFilter } from '../Layout/SelectFilter'

export const SectionFilters = () => {
  return (
    <section className='flex justify-center my-8 md:justify-around lg:max-w-4xl lg:pt-10 lg:mx-auto xl:my-14  lg:text-xl '>
            <SelectFilter filterName="platform" filters={platforms} visible='' />
            <SelectFilter filterName="genre" filters={genres} />
            <SelectFilter filterName="sortby" filters={sortbyFilter}/>
    </section>
  )
}
