import React from 'react';
import './NavHeader.css';
import Logo from './../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import CityList from '../CityList/CityList';
import ComparePage from '../ComparePage/ComparePage';
import ChecklistPage from '../ChecklistPage/ChecklistPage';
import App from '../App/App';

const NavHeader = () => {

  return (
    <div className='navigation-wrapper'>
      <header>CitySnapshot</header>
      <img src={ Logo } className='logo' alt='CitySnapshot Logo' />
        <nav className='main-nav'>
          <NavLink activeClassName='selected' exact to='/' component={ App }>Home</NavLink>
          <NavLink activeClassName='selected' exact to='/citylist' component={ CityList }>City List</NavLink>
        </nav>
    </div>
  )
}

export default NavHeader;
