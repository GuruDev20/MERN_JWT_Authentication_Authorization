import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Toaster/>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);