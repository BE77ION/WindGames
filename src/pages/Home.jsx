import image from '../assets/244467.jpg';
import GameCard from '../content/Gamecard';
import { homeGames } from '../content/gameData';
import Gamegrid from '../content/gameGrid';
import Head from '../content/Head';
import '../css/home.css'

function Home(){
    return(
        <>
      
        <div className='home'>
        <img src={image} alt="" className='imagehome' />
        <p className='textimage'>Your Favorurite Gaming Store</p>
        </div>
        <div>
           
            <Gamegrid games={homeGames}></Gamegrid>
        </div>
        </>
    )
        
    
}

export default Home;