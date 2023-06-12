import axios from 'axios';
import React,{createContext, useEffect, useState} from 'react'
import { getURLApi } from '../Utilities/utilities';

const GamesContext = createContext();

const urlBase=import.meta.env.VITE_BASE_URL;
const url = urlBase+'games?&sort-by=release-date';
const config = {
    headers:{
        'Access-Control-Allow-Origin': '*',
        'X-RapidAPI-Key': '06c424da72mshc8f5beeb98f41e7p1cfacejsnface601b048e',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }

};

const GamesProvider = ({children}) => {
    const initialStateFilter = {
        platform:'',
        genre:'',
        sortby:'release-date'
    };



    const [games, setGames] = useState([{}]);
    const [gameHero,setGameHero]=useState({});
    const [filter,setFilter]=useState(initialStateFilter)
    const [game,setGame]=useState({})
    const [idGame,setIdGame]=useState(null);
    const [loading,setLoading] = useState(false);
    

    useEffect(() => {
        const getAllGames = async()=> {
            setLoading(true);
            const data =await  axios.get(url,config);
            setGames(data.data)
            setLoading(false);
        }
    getAllGames();
    }, [])

    
    useEffect(() => {
        const getGamesWhithFilters = async()=>{
            const url = getURLApi(filter);
            const data =await  axios.get(url,config);
            setGames(data.data)
        }
        getGamesWhithFilters();
    }, [filter])

    useEffect(() => {
      const getOneGame = async () => {
        
        setLoading(true);
        const url = `${urlBase}game?id=${idGame}`;
        const data =await  axios.get(url,config);
        setGame(data.data)
        if(Object.keys(gameHero).length == 0 ){
         setHeroGameInLS(data.data)
         const dataHero = getHeroGameInLS() ;
         setGameHero(dataHero);
        }
        setLoading(false);
        

      }
      if(idGame){
            getOneGame()
      }
    }, [idGame])
    

    const setHeroGameInLS = (data) => {
        localStorage.setItem('herog', JSON.stringify(data));
    }
    
    const getHeroGameInLS = () => {
        return JSON.parse(localStorage.getItem('herog')) ;
    }
    
   
    
   const setFilterCategories = (filter)=>{
        setFilter(filter)
    }

    const changeIdGame = id => {
        setIdGame(id)
    }

    
    return(
        <GamesContext.Provider
            value={{
                setFilterCategories,
                changeIdGame,
                setIdGame,
                filter,
                games,
                gameHero,
                game,
                loading
            }}
        >
            {children}
        </GamesContext.Provider>
    )
}

export {
    GamesProvider
}

export default GamesContext;

