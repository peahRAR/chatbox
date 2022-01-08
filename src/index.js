import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App'
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Connexion/>} />
      <Route path='/pseudo/:pseudo' element={<App/>} />
      <Route element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
