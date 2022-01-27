import React from 'react';
import Preloader from '../common/preloader';
import pfInfo from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <div className={pfInfo.content}>
      <div className={pfInfo.userInfo}>
        <Preloader />
      </div>
      <div className={pfInfo.album}>
        Album
      </div>
    </div>

  }

  return (
    <div className={pfInfo.content}>
      <div className={pfInfo.userInfo}>
      {props.profile.fullName}<br/>
      About me: {props.profile.aboutMe}<br/>
      LookingForAJob: {props.profile.lookingForAJob}<br/>
      LookingForAJobDescription: {props.profile.lookingForAJobDescription}<br/>
      Contacts: <br/>
      Facebook: {props.profile.contacts.facebook}<br/>
      Vk: {props.profile.contacts.vk}<br/>
      Twitter: {props.profile.contacts.twitter}<br/>
      Instagram: {props.profile.contacts.instagram}<br/>
      Youtube: {props.profile.contacts.youtube}<br/>

      </div>
      <div className={pfInfo.album}>
        Album
      </div>
    </div>
  );
}

export default ProfileInfo;