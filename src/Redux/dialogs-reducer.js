const UP_DATE_NEW_MESSAGE_BODY = 'UP-DATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Ярик'},
        { id: 2, name: 'Игорь' },
        { id: 3, name: 'Санёк' }
    ],
    messagesData: [
        { id: 1, message: 'Лох' },
        { id: 2, message: 'sosi' }
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {

        case UP_DATE_NEW_MESSAGE_BODY:{
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            let body =  state.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messagesData: [...state.messagesData, { id: 3, message: body }]
            };
        }
        default:
            return state;
    
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UP_DATE_NEW_MESSAGE_BODY,
        body: body
        
    }
}

export default dialogsReducer;