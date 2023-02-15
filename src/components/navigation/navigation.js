import React from "react";
import './navigation.css';
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return(
    <div className='nav-container'>
      <NavLink to='/' className='nav-link'>Home</NavLink>
      <NavLink to='/about-us' className='nav-link'>About Us</NavLink>
      <NavLink to='/dogs' className='nav-link'>Dogs</NavLink>
      <NavLink to='/cats' className='nav-link'>Cats</NavLink>
      <NavLink to='/contact-us' className='nav-link'>Contact Us</NavLink>
    </div>
  )
}