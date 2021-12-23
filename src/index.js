import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { onSearchChange, onRobotRespond } from './reducers';
import logger from 'redux-logger'

const rootReducer = combineReducers({onSearchChange, onRobotRespond})
let store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));
registerServiceWorker();
