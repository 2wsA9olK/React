import React from 'react';
import { NavLink } from 'react-router-dom';
import nb from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={nb.nav}>
      <div className={nb.item}>
        <NavLink to='/profile' className={nb.aItem}>Profile</NavLink>
      </div>
      <div className={nb.item}>
        <NavLink  to='/messages' className={nb.aItem}>Messages</NavLink>
      </div>
      <div className={nb.item}>
        <NavLink to='/news' className={nb.aItem}>News</NavLink>
      </div>
      <div className={nb.item}>
        <NavLink to='/music' className={nb.aItem}>Music</NavLink>
      </div>
      <div className={nb.item}>
        <NavLink to='/settings' className={nb.aItem}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;