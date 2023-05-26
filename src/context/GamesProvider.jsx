import axios from 'axios';
import React,{createContext, useEffect, useState} from 'react'
import { getURLApi } from '../Utilities/utilities';
const GamesContext = createContext();

//const url = 'https://cors-anywhere.herokuapp.com/freetogame.com/api/games?&sort-by=release-date';
const urlBase=import.meta.env.VITE_BASE_URL;
const url = urlBase+'games?&sort-by=release-date';
const config = {
    headers:{
        'Access-Control-Allow-Origin': '*',
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
            setIdGame(data.data[0].id)
            
            //setGames(allGames)
            //setIdGame(allGames[0].id)
            setLoading(false);

            
        }
    getAllGames();
    }, [])

    
    useEffect(() => {
        const getGamesWhithFilters = async()=>{
            const url = getURLApi(filter);
            const data =await  axios.get(url,config);
            setGames(data.data)
            setIdGame(data.data[0].id)
        }
        getGamesWhithFilters();
    }, [filter])

    useEffect(() => {
      const getOneGame = async () => {
        
        setLoading(true);
        const url = `${urlBase}game?id=${idGame}`;
        const data =await  axios.get(url,config);
        setGame(data.data)
        
        
            setGameHero(data.data);
        
        setLoading(false);
        

      }
      if(idGame){
            getOneGame()
      }
    }, [idGame])
    


    
   
    
   const setFilterCategories = (filter)=>{
        setFilter(filter)
    }

    const changeIdGame = id => {
        console.log(id)
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

