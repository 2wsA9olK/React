import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs); 