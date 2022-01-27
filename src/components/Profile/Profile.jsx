import React from 'react';
import pf from './Profile.module.css';
import MyPosts from './Comment/MyPosts';
import ProfileInfo from './ProfileInfo';
import ProfileLeft from './ProfileLeft';
import MyPostsContainer from './Comment/MyPostsContainer';


const Profile = (props) => {
  return (
    <div className={pf.content}>
      <div className={pf.leftContent}>
      <ProfileLeft profile={props.profile}/>
      </div>
      <div className={pf.rightContent}>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;
