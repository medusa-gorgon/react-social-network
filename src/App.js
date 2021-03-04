import logo from './logo.svg';
import './App.css';
import './Normalize.css';
import './Adjustment.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import HeadPicture from './components/Profile/HeadPicture/HeadPicture';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeadPicture />

        <div className='app__container'>
          <Header />
          <Navbar state={props.state.messagesPage} />
          <div className='app__content'>
            <Route
              path='/profile'
              render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
            />
            <Route path='/dialogs' render={() => <Dialogs store={props.store} />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
