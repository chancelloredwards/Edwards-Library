import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './firebase.js';   // initializes Firebase once
import './index.css';     // optional global styles (Tailwind or your own)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

