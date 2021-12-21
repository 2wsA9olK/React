import React from 'react';
import dlgs from './../Dialogs.module.css';


const Messages = (props) => {
    return (
        <div className={dlgs.message}>{props.message}</div>
    );
}

export default Messages;