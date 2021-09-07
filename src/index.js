require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import App  from './components/app/App';
import { Provider } from 'react-redux';
import store from '../src/Redux/Store';

const appElement = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , appElement
);
