import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';


const App = (props) => {

  return (
    <body>
      <div className='app-wripper'>
        <Header />
        <NavBar />
        <div class='app-wrapper-content'>
          <Switch>
            <Route path='/messages' render={() => <DialogsContainer />} />
            <Route path='/profile' render={() =>
              <Profile />} />
              <Route path='/user' render={() =>
                <Users />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
          </Switch>
        </div>
      </div>
    </body>
  );
}

export default App;
