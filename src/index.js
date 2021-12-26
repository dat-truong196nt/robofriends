import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { onSearchChange, onRequestRobots } from './reducers';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({onSearchChange, onRequestRobots})
let store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));
registerServiceWorker();
