import React, {  StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './common.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <StrictMode>
    <App />
  </StrictMode>
  
);
reportWebVitals();



