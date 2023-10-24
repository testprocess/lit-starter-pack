import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';

import { Provider } from 'react-redux'
import store from './store'

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
    <Provider store={store}>
        <App  />       
    </Provider>
);

