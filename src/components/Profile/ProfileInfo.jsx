import React from 'react';
import Preloader from '../common/preloader';
import pfInfo from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {

  if (!profile) {
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
        {profile.fullName}<br />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        About me: {profile.aboutMe}<br />
        LookingForAJob: {profile.lookingForAJob}<br />
        LookingForAJobDescription: {profile.lookingForAJobDescription}<br />
        Contacts: <br />
        Facebook: {profile.contacts.facebook}<br />
        Vk: {profile.contacts.vk}<br />
        Twitter: {profile.contacts.twitter}<br />
        Instagram: {profile.contacts.instagram}<br />
        Youtube: {profile.contacts.youtube}<br />

      </div>
      <div className={pfInfo.album}>
        Album
      </div>
    </div>
  );
}

export default ProfileInfo;