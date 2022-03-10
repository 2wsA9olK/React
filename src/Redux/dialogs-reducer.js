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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {

        case SEND_MESSAGE: {
            let body =  action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 3, message: body }]
            };
        }
        default:
            return state;
    
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}


export default dialogsReducer;