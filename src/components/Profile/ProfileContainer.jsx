import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from './../../Redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId =  this.props.authorizeduserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    //console.log("RENDER PROFILE");
    return (
      <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus} />
    );
  }
}

let mapStateToProps = (state) => { 
  //console.log('mapStateToProps PROFILE');
  return ({
  profile: state.ProfilePage.profile,
  status: state.ProfilePage.status,
  authorizeduserId: state.auth.userId,
  isAuth: state.auth.isAuth 
})}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);