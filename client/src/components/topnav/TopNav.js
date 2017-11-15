import React from 'react';

import './TopNav.scss';
import logo from '../../logo.svg';
import Burger from './burger';

const TopNav = () => (
    <header className='header'>
        <a href="/" className='logoLink'>
            <img className='logo' alt="Skyscanner" src={logo}/>
            <span className='logoText'>skyscanner</span>
        </a>
        <Burger />
    </header>
);

export default TopNav;
