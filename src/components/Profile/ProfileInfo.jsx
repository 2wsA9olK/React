import React, { useState } from 'react';
import Preloader from '../common/preloader';
import ProfileDataForm from './ProfileDataForm';
import css from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <div className={css.content}>
      <div className={css.userInfo}>
        <Preloader />
      </div>
      <div className={css.album}>
        Album
      </div>
    </div>

  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(()=>{
      setEditMode(false);
    })
  };

  return (
    <div className={css.content}>
      <div className={css.userInfo}>
        {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData profile={profile}
            isOwner={isOwner}
            goToEditeMode={() => { setEditMode(true) }} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      <div className={css.album}>
        Album
      </div>
    </div>
  );
}

const ProfileData = ({ profile, isOwner, goToEditeMode }) => {



  return (
    <div>
      <div>
        {isOwner && <button onClick={goToEditeMode}>edit</button>}
      </div>
      <b>{profile.fullName}</b><br />
      <b>About me:</b> {profile.aboutMe}<br />
      <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}<br />
      {profile.lookingForAJob &&
        <div><b>My professional skills:</b> {profile.lookingForAJobDescription}</div>}
      <br />
      <b>Contacts:</b> <br />
      <div className={css.contacts}>
        {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div>
    </div>
  )
}


const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}: </b> {contactValue}
    </div>
  )
}

export default ProfileInfo;