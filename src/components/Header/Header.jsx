import React, { useRef } from 'react';
import { useState } from 'react';
import { NavLink as div } from 'react-router-dom';
import useInsideClick from '../../hooks/useClickInside';
import useOutsideClick from '../../hooks/useClickOtside';
import css from './Header.module.css';
import MenuContainer from './Menu/Menu';
import Menu from './Menu/Menu';

const Header = (props) => {

    return (
        <header className={css.header}>
            <div className={css.aLogo}>
                <div className={css.logo}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png'></img>
                    <div >
                    <MenuContainer />
                    </div>

                </div>
 
            </div>

            <div className={css.LoginBlock}>

                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <div to={'/login'}>Login</div>}
            </div>
        </header>

    );
}

export default Header;