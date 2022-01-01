import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import dlgs from './Dialogs.module.css'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements =
        state.dialogsData.map(dlg => <DialogItem name={dlg.name} key={dlg.id} id={dlg.id} />);


    let messagesElements =
        state.messagesData.map(msg => <Messages message={msg.message} key={msg.id} id={msg.id} />);
        let newMessageBody =
        state.newMessageBody;

    let newMessageElement = React.createRef(); 
    
    let addMessage = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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
                        <textarea placeholder='хуй' ref={newMessageElement}
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