import React from 'react';
import hd from './Header.module.css';

const Header = () => {
    return (
        <header className={hd.header}>
            <a href='#a' className={hd.aLogo}>
                <div className={hd.logo}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png'></img>
            <div className={hd.logoTitle}>
                VK Music
            </div>
            </div>
            </a>
        </header>
        
    );
}

export default Header;