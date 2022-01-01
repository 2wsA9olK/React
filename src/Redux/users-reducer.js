const ADD_POST = 'ADD-POST';
const UP_DATE_NEW_POST_TEXT = 'UP-DATE-NEW-POST-TEXT';

let initialState = {
    myPostData: [
        { id: 1, message: 'ыыыы', likeConst: 20 },
        { id: 1, message: 'это какая-то хрень', likeConst: 10 }
    ],
    newPostText: ''
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UP_DATE_NEW_POST_TEXT,
        newText: text

    }
}

export default profileReducer;