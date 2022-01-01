import React from 'react';
import pfLeft from './ProfileLeft.module.css';

function ProfileLeft() {
  return (
    <div className={pfLeft.content}>
      <div className={pfLeft.ava}>
        Photo
      </div>
      <div className={pfLeft.friends}>
        Friends
      </div>
      <div></div>
    </div>
  );
}

export default ProfileLeft;