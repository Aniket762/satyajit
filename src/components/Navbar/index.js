import { Hidden } from '@material-ui/core';
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Satyajit</h1>
        </NavLink> 
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About Me
          </NavLink>
          <NavLink to='/photos' activeStyle>
            Photos
          </NavLink>          
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
         
        </NavMenu>  
        
      </Nav>
    </>
  );
};

export default Navbar;
