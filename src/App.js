import React, { Component, Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { initializeApp } from './Redux/app-reducer';

import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from './components/common/preloader';
import store from './Redux/redux-store';
import { } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));



class App extends Component {
  catchAllUnhandledErrors = (reasone, promise) => {
    alert("Some   error occured");
    //console.error(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentDidUnmount() {
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    };

    return (
      <body>
        <div className='app-wripper'>
          <HeaderContainer />
          <NavBar />
          <div class='app-wrapper-content'>
            <Switch>
              <Route path='/messages'
                render={ withSuspense(DialogsContainer)} />
              <Route path='/profile/:userId?'
               render={ withSuspense(ProfileContainer)} />
              <Route path='/users' render={() =>
                <UsersContainer />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/settings' render={() => <Settings />} />
              <Route path='/login' render={() => <Login />} />
              <Redirect exact from='/' to='/profile' />
              <Route path='*' render={()=> <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
        </div>
      </body>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))
  (App);

const SamuraiJSApp = (props) => {
  return (

    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>

  )
};

export default SamuraiJSApp;