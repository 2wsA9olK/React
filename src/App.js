import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


const App = (props) => {

  return (
    <BrowserRouter>
      <body>
        <div className='app-wripper'>
          <Header />
          <NavBar />
          <div class='app-wrapper-content'>
            <Switch>
              <Route path='/messages' render={ ()=> <Dialogs state={props.state.dialogsPage} />} />
              <Route path='/profile' render={ () => 
              <Profile ProfilePage={props.state.ProfilePage}
               addPost={props.addPost}
               updateNewPostText = {props.updateNewPostText}
               />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/settings' render={() => <Settings />} />
            </Switch>
          </div>
        </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
