import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {applyMiddleware, compose, createStore,} from 'redux';
import {rootReducers} from "./components/redux/rootReducer";
import {Provider} from "react-redux"
import thunk from 'redux-thunk';

const store = createStore(rootReducers,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)


render(app, document.getElementById('root'));





