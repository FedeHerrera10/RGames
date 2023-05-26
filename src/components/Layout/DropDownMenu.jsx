import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import useMenu from '../../hooks/useMenu';

export const DropDownMenu = ({listMenu}) => {
    const classMenuDropDown = 'text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold';
    
    const [menu,setMenu]=useState('hidden');
    const {handleOpenSidebar} = useMenu();
    const {title,route,items} = listMenu;
    
    
    const  dropdown = ()=> {
      if(menu === 'hidden') {
            setMenu(classMenuDropDown);
            return;
      }
      setMenu('hidden');
    }

    const hiddenSidebarAndMenu = () => {
      handleOpenSidebar();
      dropdown();
    }
    

  return (
   <>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer 
        hover:bg-lime-600 text-white"
        onClick={dropdown}
      >
        <i className="bi bi-chat-left-text-fill"></i>
        <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">{title}</span>
          <span className="text-sm rotate-180" id="arrow">
            <i className="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>
      <div
        className={menu}
        id="submenu"
      >
        {
          items.map(item => (
            <NavLink 
            to={`/${route}/${item.toLowerCase()}`}
            className="cursor-pointer p-2 hover:bg-lime-600 rounded-md mt-1 block" 
            onClick={hiddenSidebarAndMenu}
            key={item}
            
            >
              {item}
            </NavLink>
          )) 
        }
      </div>
   </>
  )
}
