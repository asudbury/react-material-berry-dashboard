import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './App';
import reducer from './store/reducer';
import './assets/scss/style.scss';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
