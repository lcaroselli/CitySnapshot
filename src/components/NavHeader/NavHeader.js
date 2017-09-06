import React from 'react';
import './NavHeader.css';
import Logo from './../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

const NavHeader = () => {

  return (
    <div className='navigation-wrapper'>
      <header>CitySnapshot</header>
      <img src={ Logo } className='logo' alt='CitySnapshot Logo' />
        <nav>
          <NavLink activeClassName='selected' exact to='/citylist'>City List</NavLink>
          <NavLink activeClassName='selected' exact to='/compare'>Compare Cities</NavLink>
          <NavLink activeClassName='selected' exact to='/checklist'>Moving Checklist</NavLink>
          <NavLink activeClassName='selected' exact to='/login'>Log-In</NavLink>
        </nav>
    </div>
  )
}

export default NavHeader;
