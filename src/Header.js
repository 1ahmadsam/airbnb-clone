import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__icon'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png'
          alt='airbnb'
        />
      </Link>

      <div className='header__center'>
        <input type='text' />
        <SearchIcon />
      </div>
      <div className='header__right'>
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
