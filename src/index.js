import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let postsData = [
  { id: 1, message: 'My first post', likeCount: 103 },
  { id: 2, message: 'Second post lol', likeCount: 50 },
  { id: 3, message: 'How are you?', likeCount: 0 },
  { id: 4, message: 'Another post', likeCount: 2 },
];
let dialogsData = [
  { id: 1, name: 'Masha' },
  { id: 2, name: 'Vlad' },
  { id: 3, name: 'Yana' },
  { id: 4, name: 'Valeria' },
  { id: 5, name: 'Ariel' },
  { id: 6, name: 'Diana' },
  { id: 7, name: 'Alexandr' },
  { id: 8, name: 'Vlada' },
  { id: 9, name: 'Jonh' },
];
let messagesData = [
  { id: 1, message: 'Hey' },
  { id: 2, message: 'Hello' },
  { id: 3, message: 'How are you?' },
  { id: 4, message: 'Good' },
  { id: 5, message: 'Haha' },
];
ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
