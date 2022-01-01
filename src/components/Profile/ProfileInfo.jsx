import React from 'react';
import pfInfo from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <div className={pfInfo.content}>
      <div className={pfInfo.userInfo}>
        ava+description
      </div>
      <div className={pfInfo.album}>
        Album
      </div>
    </div>
  );
}

export default ProfileInfo;