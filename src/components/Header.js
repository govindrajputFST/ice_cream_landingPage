import React from 'react';
import './Header.css'
import iceCream from '../iceCream.png'
const Header = () => {
  return (
    <header>
      {/* <h1>Ice Cream Brand Name</h1> */}
      <nav>
        <ul>
      <img src={iceCream} alt='Ice cream'  width="40px" id='iceicon' />
                
          <li><a href="/">Home</a></li>
          <li><a href="#flavors">Flavors</a></li>
          <li><a href="#map">Store Locator</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
