"use strict";
import { createStore, applyMiddleware } from 'redux';
import 'babel-polyfill'
import reducers from './reducers';
import logger from 'redux-logger';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Matching from "./components/Matching";


// store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(<Provider store={store}>
    <Matching />
</Provider>, document.getElementById('app'));