import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  };
}

//создали хранилище
const store = createStore(reducer);

//подписываемся на обновление хранилища
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});

const inc = () => {
  store.dispatch({type: 'INC'});
}

const dec = () => {
  store.dispatch({type: 'DEC'});
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App inc={inc} dec={dec} count={store.getState()}/>
  </React.StrictMode>
);

