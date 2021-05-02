import reportWebVitals from './reportWebVitals';
import './index.css';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import MainApp from './App';

ReactDOM.render(<MainApp state={store.getState()} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
