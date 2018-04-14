import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { reducer } from './reducers/index';

import App from './containers/App.tsx'

const store = createStore(reducer, applyMiddleware(
    logger,
));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
