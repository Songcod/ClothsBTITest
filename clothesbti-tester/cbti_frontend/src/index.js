import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'; // 전역 스타일
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
