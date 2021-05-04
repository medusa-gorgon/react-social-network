import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import './Normalize.css';
import './Adjustment.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import HeadPicture from './components/Header/HeadPicture/HeadPicture.jsx';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';
import { initializeApp } from './redux/app-reducer';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import { withSuspence } from './hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className='app-wrapper'>
        <HeadPicture />

        <div className='app__container'>
          <HeaderContainer />
          <Navbar /> {/*state={props.state.messagesPage}*/}
          <div className='app__content'>
            <Route path='/login' render={() => <Login />} />
            <Route path='/profile/:userId?' render={withSuspence(ProfileContainer)} />
            <Route path='/messages' render={withSuspence(DialogsContainer)} />
            <Route path='/settings' render={withSuspence(Settings)} />
            <Route path='/users' render={() => <UsersContainer />} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <AppContainer />;
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
