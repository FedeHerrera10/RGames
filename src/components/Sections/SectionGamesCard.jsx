import React, { useState } from 'react'
import { CardGame } from '../UI/CardGame'

export const SectionGamesCard = ({games}) => {
  const [cardSize, setcardSize] = useState(11)

  const handleSetCardSize = ()=> {
    setcardSize(cardSize+11);
  }

  const countGames = games.length;
  
  
  return (
    <>
    {
      games &&  
      <section className='flex flex-col items-center flex-nowrap'>
      <div className='grid grid-cols-1 w-full mt-10 gap-4  md:grid-cols-3 lg:grid-cols-4 lg:px-8 2xl:grid-cols-5 2xl:px-10'>
          {
            games.slice(1, cardSize).map(game => {
              return <CardGame gameData={game} key={game.id}/>
            })
          }
      </div>
      {
        (cardSize < countGames  ) && 
      <button className='text-white bg-lime-700 cursor-pointer w-48 p-2 my-10 text-xl
                       hover:bg-lime-600 transition-all' onClick={handleSetCardSize}>
                More
              </button> 
      }
      </section>
    }
        
    </>
  )
}
