import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App.js';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/Globalstyle/index.js';
// import store from './redux/store.js';
// import { Provider } from 'react-redux';
import AppTwo from './AppTwo.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <AppTwo />
        </GlobalStyles>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
