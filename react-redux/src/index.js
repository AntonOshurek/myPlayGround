import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import reducer from './store/reducer';
//создали хранилище с редюсером
const store = configureStore({reducer: reducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

