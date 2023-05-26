import React from 'react'
import useGames from '../../hooks/useGames.jsx';

import { Hero } from '../Layout/Hero.jsx';
import { SectionGamesCard } from '../Sections/SectionGamesCard.jsx';
import { SectionFilters } from '../Sections/SectionFilters.jsx';

export const Index = () => {
    const {games,game} = useGames();
    
    return (
        <>
            <Hero game={game}/>
             <section className='w-11/12 mx-auto my-12 xl:mt-16'>
                <h2 className='text-white text-center text-4xl underline xl:text-5xl decoration-lime-700'>News</h2>
                <SectionFilters/>
                <SectionGamesCard games={games}/>
            </section> 
        </>
    )
}
