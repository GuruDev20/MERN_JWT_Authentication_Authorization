import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import {Provider} from 'react-redux'
import { persist, Store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <PersistGate loading={null} persistor={persist}>
                <BrowserRouter>
                    <Toaster/>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);