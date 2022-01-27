import React from 'react';
import Preloader from '../common/preloader';
import css from './ProfileLeft.module.css';

function ProfileLeft(props) {

  if (!props.profile) {
    return <div>
      <div className={css.ava}>
        <Preloader />
      </div>
      <div className={css.friends}>
        Friends
      </div>
    </div>
  }

  return (
    <div className={css.content}>
      <div className={css.ava}>
        <img src={props.profile.photos.large} className={css.photoAva} />
      </div>
      <div className={css.friends}>
        Friends
      </div>
      <div></div>
    </div>
  );
}

export default ProfileLeft;