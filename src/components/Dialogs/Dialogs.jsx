import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import dlgs from './Dialogs.module.css'



const Dialogs = (props) => {


    let dialogsElements =
        props.state.dialogsData.map(dlg => <DialogItem name={dlg.name} id={dlg.id} />);


    let messagesElements =
        props.state.messagesData.map(msg => <Messages message={msg.message} />);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    return (
        <div className={dlgs.dialogs}>
            <div className={dlgs.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={dlgs.messages}>
                <div className={dlgs.message}>
                    {messagesElements}
                    <div>
                        <textarea ref={newMessageElement}></textarea>
                        <button onClick={addMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;