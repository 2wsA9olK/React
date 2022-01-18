import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import css from './Dialogs.module.css'

const Dialogs = ({
    dialogsPage: state,
    sendMessage: addMessage,
    updateNewMessageBody,
}) => {
    const dialogsElements = state.dialogsData.map(
        dlg => <DialogItem name={dlg.name} key={dlg.id} id={dlg.id} />
    );

    const messagesElements = state.messagesData.map(
        msg => <Messages message={msg.message} key={msg.id} id={msg.id} />
    );
    const { newMessageBody } = state;
    const newMessageElement = React.createRef();

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        updateNewMessageBody(body);
    };
    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div className={css.message}>
                    {messagesElements}
                    <div>
                        <textarea
                            placeholder='хуй'
                            ref={newMessageElement}
                            value={newMessageBody}
                            onChange={onNewMessageChange}>
                        </textarea>
                        <button onClick={addMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
