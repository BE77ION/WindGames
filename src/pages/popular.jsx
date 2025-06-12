import { Link } from "react-router-dom";
import '../css/popular.css'
import Gamegrid from "../content/gameGrid";
import { popularGames } from "../content/gameData";
function Popular() {
  return <>
  <div className="container">
  
    <h1 className="heading">Most Popular</h1>
     <Gamegrid games={popularGames}></Gamegrid>
 
  </div>
  
</>

}
export default Popular;
