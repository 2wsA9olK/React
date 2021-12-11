import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
      <body>
        <div className='app-wripper'>
          <Header />
          <NavBar />
          <div class='app-wrapper-content'>
            <Routes>
              <Route path='/messages' component={Dialogs} />
              <Route path='/profile' component={Profile} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/setting' component={Settings} />
            </Routes>
          </div>
        </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
