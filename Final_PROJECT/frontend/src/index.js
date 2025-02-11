import React from 'react';  //Used for building and rendering the UI.
import ReactDOM from 'react-dom/client';
import './index.css';  //Global styles.
import App from './App'; //Main component that serves as the root of application.
import reportWebVitals from './reportWebVitals';  //Helps measure app performance.
import { BrowserRouter } from 'react-router-dom'; //Enables routing (navigation between different pages) in app.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();  //Used for performance monitoring
