import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import reducers from './store/reducers';
import { peopleSaga } from './sagas/people-saga';

const sagaMiddleware = new createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(peopleSaga);

ReactDOM.render(<Provider store={ store }><App title='Person Management' /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
