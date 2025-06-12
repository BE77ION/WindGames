import gamecover from '../assets/gamecover.jpeg'
import '../css/gamecard.css'
function GameCard({title,size,imageurl,link}){
    return(

<>  
    <div className='gamecard'>
        
        <img className='cover'src={imageurl} alt="" />
        <p className='title'>{title}</p>
        <p className='size'>{size}</p>
    </div>
    
   

</>
    )
}
export default  GameCard;