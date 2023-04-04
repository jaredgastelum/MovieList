import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//THIS IS THE NAVBAR THAT ROUTES TO THE OTHER PAGES
function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Podcast">Podcast</Link>
        </li>
        <li>
          <Link to="/Movies">MovieList</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
