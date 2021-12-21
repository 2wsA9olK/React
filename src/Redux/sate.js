import { rerenderEntireTree } from "../render";

let state = {

    ProfilePage: {
        myPostData: [
            { id: 1, message: 'ыыыы', likeConst: 20 },
            { id: 1, message: 'это какая-то хрень', likeConst: 10 }
        ],
        newPostText: 'aaa'
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Ярик'},
            { id: 2, name: 'Игорь' },
            { id: 3, name: 'Санёк' }
        ],
        messagesData: [
            { message: 'Лох' },
            { message: 'sosi' }
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.ProfilePage.newPostText,
        likeConst: 0
    };

    state.ProfilePage.myPostData.push(newPost);
    state.ProfilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.ProfilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;