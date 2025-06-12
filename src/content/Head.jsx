import {Link} from 'react-router-dom'
import logo from '../assets/gaming-logo-49566.png';
import search from '../assets/icons8-search-50.png';
import '../css/Head.css'
import React, { useState } from 'react';
function Head(){
    const[showSearch,setShowSearch]=useState(false);
    const[searchText,setSearchText]=useState('');

    const toggle=()=>{
        setShowSearch(prev=>!prev);
    }
    return (
        <>
         
        <nav className='navbar'>
            <div className='logoclass'>
            <img  className='logo'src={logo} alt="" />
        <p className='Heading'>Wind Games</p>
        </div>
       <div className='links'>
           <Link to='/' className='options'> Home </Link>
           <Link to='/popular' className='options'> Popular  </Link>
           <Link to='/support' className='options'> Support  </Link> 
           <button className='searchbutton' > <img  className='searchimage' 
           src={search} alt="" onClick={toggle}/>  </button>
           
           </div>
       
        </nav>
         {showSearch && (
        <div className='searchbox-container'>
          <input
            type='text'
            placeholder='Search your favorite games...'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='searchbox'
          />
        </div>
      )}
        </>
    )
}

export default Head;