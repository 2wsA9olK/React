import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UP_DATE_NEW_POST_TEXT = 'UP-DATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    myPostDate: [
        { id: 1, message: 'ыыыы', likeConst: 20 },
        { id: 1, message: 'это какая-то хрень', likeConst: 10 }
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeConst: 0
            };

            return {
                ...state,
                myPostDate: [...state.myPostDate, newPost],
                newPostText: ''
            };
        }
        case UP_DATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UP_DATE_NEW_POST_TEXT,
        newText: text

    }
}

export default profileReducer;