import React from 'react';
import pf from './Profile.module.css';
import MyPosts from './Comment/MyPosts';

function Profile() {
  return (
    <div>
      <div>
        <img src='https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg' />
      </div>
      <div>
        ava+description
      </div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
}

export default Profile;