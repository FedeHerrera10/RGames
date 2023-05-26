import React, { useState } from 'react'
import { DropDownMenu } from './DropDownMenu';
import listMenu from '../../Data/menuData';
import useMenu from '../../hooks/useMenu';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const {menu,handleOpenSidebar} = useMenu();
   
    const handlerChangeSidebar =() => {
      handleOpenSidebar();
    }

return (
    <nav className='relative h-16  z-50  '>
      <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
            onClick={ handlerChangeSidebar} >
        <i className="bi bi-filter-left px-2 bg-zinc-800 rounded-md"></i>
      </span>

    <Link className="absolute text-white  top-5 left-20 cursor-pointer align-middle 
                     leading-9 text-xl " to="/">
      <i className="bi bi-controller px-2 rounded-md text-4xl align-middle text-lime-600"></i>
        RGames
    </Link>
    
    <div
      className={menu}
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <i className="bi bi-controller px-2 py-1 rounded-md bg-lime-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-2">RGames</h1>
          <i
            className="bi bi-x cursor-pointer ml-28 "
            onClick={handleOpenSidebar}
          ></i>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      
      <DropDownMenu listMenu={listMenu[0]}/>
      <DropDownMenu listMenu={listMenu[1]}/>
    </div>

    </nav>
  )
}
