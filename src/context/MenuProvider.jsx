import React,{createContext, useState} from 'react'

const MenuContext = createContext();

const MenuProvider = ({children}) => {
    const sidebarClass = 'sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-zinc-800 overflow-x-hidden  z-50'
    
    const [menu,setMenu]=useState('hidden');
    
    const [openSidebar ,setOpenSidebar] = useState(true);

    const handleOpenSidebar = () => {
        setOpenSidebar(!openSidebar)
        if(!openSidebar){
            setMenu('hidden');
            return;
        }

        setMenu(sidebarClass)
    }

    return (
        <MenuContext.Provider
        value={{
            menu,
            openSidebar,
            handleOpenSidebar
        }}
        >
            {children}
        </MenuContext.Provider>
    )
}

export {
    MenuProvider
}

export default MenuContext;
