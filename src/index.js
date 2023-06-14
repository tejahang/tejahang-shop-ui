import './assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/products';
import { BrowserRouter } from 'react-router-dom';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
