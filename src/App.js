import logo from './logo.svg';
import './App.css';
import './Normalize.css';
import './Adjustment.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import HeadPicture from './components/Header/HeadPicture/HeadPicture.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeadPicture />

        <div className='app__container'>
          <HeaderContainer />
          <Navbar /> {/*state={props.state.messagesPage}*/}
          <div className='app__content'>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/messages' render={() => <DialogsContainer />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/users' render={() => <UsersContainer />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
