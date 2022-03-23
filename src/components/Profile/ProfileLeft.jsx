import React from 'react';
import Preloader from '../common/preloader';
import css from './ProfileLeft.module.css';
import userPhoto from "./../../assets/images/iconUsers.png";
import { propTypes } from 'redux-form';

function ProfileLeft({profile, isOwner, savePhoto }) {

  if (!profile) {
    return <div>
      <div className={css.ava}>
        <Preloader />
      </div>
      <div className={css.friends}>
        Friends
      </div>
    </div>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length){
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={css.content}>
      <div className={css.ava}>
        <img src={profile.photos.large || userPhoto } className={css.photoAva} />
        {isOwner && <input type={"file"}  onChange={onMainPhotoSelected} />}
      </div>
      <div className={css.friends}>
        Friends
      </div>
      <div></div>
    </div>
  );
}

export default ProfileLeft;