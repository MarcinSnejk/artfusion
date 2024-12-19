import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        
        <div className='navbar-container'>
          <div className='navbar-content'>
            
            <h1 id="n-logo">ArtFusion</h1>

             <ul className='navul'>

                <li className='navmenu'>Who we are?</li>
                <li className='navmenu'>Why us?</li>
                <li className='navmenu'>Marketplace</li>

             </ul>

             <button className='nav-button'>Login</button>

          </div>
        </div>

    </div>
  )
}

export default Navbar
