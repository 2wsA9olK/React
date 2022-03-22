import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = (props) => {
    return (
        <header className={css.header}>
            <NavLink to={'/profile'} className={css.aLogo}>
                <div className={css.logo}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png'></img>
                    <div className={css.logoTitle}>
                        ПЕЧАТОЛКА
                    </div>
                </div>
            </NavLink>
            <div className={css.LoginBlock}>

                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    );
}

export default Header;