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

store.dispatch({
    payload: [{
        description: '12 rules',
        id: 1,
        price: 33,
        title: '12 Rule for Life: An Antidote to Chaos',
    }],
    type: 'POST_BOOK',
});

store.dispatch({
    type:"ADD_TO_CART",
    payload: [{id: 2}] 
})

store.dispatch({
    payload: [{
        description: 'Maps',
        id: 2,
        title: 'Maps of Meaning',
    }],
    type: 'POST_BOOK',
});

store.dispatch({
    payload: {
        id: 1,
    },
    type: 'DELETE_BOOK',
});

store.dispatch({
    payload: {
        id: 2,
        title: 'Updated title for the book with an id of 1',
    },
    type: 'UPDATE_BOOK',
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
