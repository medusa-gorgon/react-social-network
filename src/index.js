import reportWebVitals from './reportWebVitals';
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App state={store.getState()} />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
};

console.log(store);

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
