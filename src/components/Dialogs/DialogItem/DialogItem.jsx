import React from 'react';
import { NavLink } from 'react-router-dom';
import dlgs from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/messages/' + props.id;

    return (
        <div className={dlgs.dialog + '' + dlgs.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;