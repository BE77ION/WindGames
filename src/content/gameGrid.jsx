import '../css/gamecard.css';
import gamecover from '../assets/gamecover.jpeg'
import GameCard from './Gamecard';
import game2 from '../assets/game2.jpeg'
import rdr2 from '../assets/rdr2.jpg'
import as3 from '../assets/as3.jpg'

  function Gamegrid({ games }) {
    
  return (
    <div className='card'>
      <div className='gamegrid'>
        {games.map((game, index) => (
          <GameCard
            key={index}
            imageurl={game.image}
            title={game.title}
            size={game.size}
            link={game.link}
           
          />
        ))}
      </div>
    </div>
  );
}

export default Gamegrid;