import React, { useEffect } from 'react'
import { SectionGamesCard } from '../Sections/SectionGamesCard'
import { useLocation } from 'react-router-dom'
import useGames from '../../hooks/useGames';
import { getFilterParam } from '../../Utilities/utilities';
import { SectionFilters } from '../Sections/SectionFilters';


export const SearchPage = () => {
    const location = useLocation();
    const {pathname} = location;
    const {setFilterCategories,games} = useGames();
    

useEffect(() => {
    const getUrlFilter  = () => {
       const path = pathname.split('/');
        const filter=getFilterParam(path);
        setFilterCategories(filter);
}
    getUrlFilter();
}, [pathname])


    
  return (
    <>
    <SectionFilters/>
    <SectionGamesCard games={games}/>
    </>
  )
}
