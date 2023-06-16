import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();