import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import css from './Dialogs.module.css'
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import Menu from '../Header/Menu/Menu';
import MenuContainer from '../Header/Menu/Menu';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    const dialogsElements = state.dialogsData.map(
        dlg => <DialogItem name={dlg.name} key={dlg.id} id={dlg.id} />
    );

    const messagesElements = state.messagesData.map(
        msg => <Messages message={msg.message} key={msg.id} id={msg.id} />
    );
    const newMessageBody = state.newMessageBody;

    const AddNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) {
        return <Redirect to={"./login"} />
    };

    return (
        <div>
            <div className={css.dialogs}>
                <div className={css.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={css.messages}>
                    <div className={css.message}>
                        {messagesElements}
                    </div>
                    <AddMessageFormRedux onSubmit={AddNewMessage} />
                </div>
            </div>
        </div>
    );
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newMessageBody" placeholder={"Enter your message"}
                validate={[required, maxLength50]} />
            <button>Send</button>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;
