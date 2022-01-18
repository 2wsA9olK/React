import dialogsReduser from "./dialogs-reducer";
import profileReduser from "./profile-reducer";
import sidebarReduser from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UP_DATE_NEW_POST_TEXT = 'UP-DATE-NEW-POST-TEXT';
const UP_DATE_NEW_MESSAGE_BODY = 'UP-DATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _callsubscriber() {
        console.log('state was change')
    },

    _state: {
        ProfilePage: {
            myPostDate: [
                { id: 1, message: 'ыыыы', likeConst: 20 },
                { id: 1, message: 'это какая-то хрень', likeConst: 10 }
            ],
            newPostText: 'aaa'
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Ярик' },
                { id: 2, name: 'Игорь' },
                { id: 3, name: 'Санёк' }
            ],
            messagesData: [
                { id: 1, message: 'Лох' },
                { id: 2, message: 'sosi' }
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callsubscriber = observer;
    },

    dispatch(action) {

        this._state.ProfilePage = profileReduser(this._state.ProfilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);

        this._callsubscriber(this._state);
    }
};

window.store = store;
export default store;