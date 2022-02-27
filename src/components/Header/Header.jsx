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
                        ЫыЫыЫыЫ
                    </div>
                </div>
            </NavLink>
            <div className={css.LoginBlock}>

                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    );
}

export default Header;