import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useInsideClick from "../../../hooks/useClickInside";
import useOutsideClick from "../../../hooks/useClickOtside";
import css from "./Menu.module.css";

const Menu = (props) => {
    let [openMenu, setMenu] = useState(false);

    const activeMenu = () => {
        setMenu(!openMenu);
    }

    const deactiveMenu = () => {
        setMenu(false);
    }   
    const ref = useRef();
    useOutsideClick(ref, deactiveMenu);

    const trigger = () => {
        return <div>
            <div  onClick={activeMenu} >
            <img className={css.arrowDown} src="https://findcreek.com/assets/img/icons/chevron-down.svg" />
            </div>
        </div>
    }

    return <div >
        <div ref={ref} className={openMenu ? css.open_menu : css.menu}>
            {trigger()}
            <div  onClick={activeMenu}>
                <ContextMenu openMenu={openMenu} />
            </div>
        </div>
    </div>
}

const ContextMenu = ( openMenu, activeMenu) => {
    return <div className={!openMenu ? css.open_menu : css.menu}>
        <ul >
            <NavLink to={"/profile"} >
                <li class="">
                    <img draggable="false" src="https://findcreek.com/assets/img/icons/user.svg" />
                    Профиль
                </li>
            </NavLink>
            <NavLink to={"/profile/friends/"} >
                <li class="profile-friends ">
                    <img draggable="false" src="https://findcreek.com/assets/img/icons/users.svg" />
                    Друзья
                </li>
            </NavLink>
            <NavLink to={"/support/tickets"} >
                <li class="">
                    <img draggable="false" src="https://findcreek.com/assets/img/icons/message-report.svg" />
                    Поддержка
                </li>
            </NavLink>
            <NavLink to={"/settings"}>
                <li class="">
                    <img draggable="false" src="https://findcreek.com/assets/img/icons/settings.svg" />
                    Настройки
                </li>
            </NavLink>
            <a href="https://findcreek.com/inc/logout.php">
                <li className={css.logout}>Выйти из аккаунта</li>
            </a>
        </ul>
    </div>
}


export default Menu;