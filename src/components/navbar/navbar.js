import React from 'react';
import './navbar.css';

const Navbar = () => (
  <header>
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        <li className="navTitle"><h3 className="navTitle">BOOKS</h3></li>
        <li className="navTitle"><h3 className="navTitle">CATEGORIES</h3></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
