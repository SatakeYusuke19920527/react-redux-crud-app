import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import EventsIndex from './components/EventsIndex';
import './index.css';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<EventsIndex />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
