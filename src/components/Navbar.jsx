import React from 'react';
import "./Navbar.css"


function Navbar() {
  return (
    <div>
        <div className='navbar1'>
            <ul className='nav_items'>
              <div>
              <i className="fa-solid fa-magnifying-glass"></i>
              </div>
                <li>Home</li>
                <li>Shop</li>
                <li>Collections</li>
                <div><i className="fa-sharp fa-solid fa-shield-cat fa-2xl"></i></div>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact Us</li>

                <div>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div>
              <i class="fa-regular fa-user"></i>
              </div>
            </ul>
        </div>

    </div>
  )
}

export default Navbar