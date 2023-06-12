import React from 'react'
import useGames from '../../hooks/useGames';

export const SelectFilter = ({filterName,filters,visible='hidden'}) => {
  
  const {filter,setFilterCategories} = useGames();
  const classCss = `${visible} md:inline-block`;
  const valueDf = filter[filterName];
  const handleChangeSelect = e =>{
    setFilterCategories({...filter,
      [e.target.name]: e.target.value
     });
     
  } 
  

  return (
    <div className={classCss}>
      <label htmlFor="" className='text-zinc-200 text-md mr-2 self-center capitalize'>{filterName}</label>
      <select name={filterName} id={filterName} onChange ={handleChangeSelect} value={valueDf} 
            className='  bg-lime-700 border border-lime-700 text-white
             hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none 
             focus:shadow-outline overflow-y-scroll h-8 cursor-pointer' 
      >
        {
          filters.map(filter => (
            <option value={filter.key} key={filter.key} className="overflow-y-scroll" >{filter.title}</option>
          ))
        }
      </select>
     </div>
  )
}
