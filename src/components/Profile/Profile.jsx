import React from 'react';
import pf from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import ProfileLeft from './ProfileLeft';
import MyPostsContainer from './Comment/MyPostsContainer';

const Profile = (props) => {

  return (
    <div className={pf.content}>
      <div className={pf.leftContent}>
        <ProfileLeft profile={props.profile}
          savePhoto={props.savePhoto}
          isOwner={props.isOwner} />
      </div>
      <div className={pf.rightContent}>
        <ProfileInfo profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          isOwner={props.isOwner}
          saveProfile={props.saveProfile} />
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;
