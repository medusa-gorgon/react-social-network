import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Comp) => {
  class RedirectComponent extends Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'} />;
      return <Comp {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};
