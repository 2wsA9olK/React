import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
});

const mapDispatchToProps = (dispatch) => ({
    updateNewMessageBody: (body) => {
        dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
        dispatch(sendMessageCreator());
    }
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer; 