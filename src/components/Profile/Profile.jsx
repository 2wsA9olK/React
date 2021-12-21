import React from 'react';
import pf from './Profile.module.css';
import MyPosts from './Comment/MyPosts';
import ProfileInfo from './ProfileInfo';


function Profile (props) {

  return (
    <div>
      <ProfileInfo />
        <MyPosts myPostData={props.ProfilePage.myPostData}
        newPostText={props.ProfilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText = {props.updateNewPostText} />
    </div>
  );
}

export default Profile;
