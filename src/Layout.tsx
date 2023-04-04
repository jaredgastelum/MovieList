import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

//THIS WORKS TO SHOW THE NAVBAR ON ALL THE PAGES OF THE WEBSITE
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
