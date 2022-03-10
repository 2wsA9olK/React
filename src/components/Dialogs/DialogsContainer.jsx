import React from 'react';
import { sendMessageCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (newMessageBody) => {
        dispatch(sendMessageCreator(newMessageBody));
    }
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs); 