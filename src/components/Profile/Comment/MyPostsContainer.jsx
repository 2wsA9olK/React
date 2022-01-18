import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
    return {
        myPostDate: state.ProfilePage.myPostDate,
        newPostText: state.ProfilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;