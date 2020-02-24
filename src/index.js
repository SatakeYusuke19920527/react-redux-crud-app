import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import EventsIndex from './components/EventsIndex';
import './index.css';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<EventsIndex />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
