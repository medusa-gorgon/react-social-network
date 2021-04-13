import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default compose(connect(mapStateToProps, { getUserProfile }), withRouter, withAuthRedirect)(ProfileContainer);
