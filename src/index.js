import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import EventsIndex from './components/EventsIndex';
import EventsNew from './components/EventsNew';
import './index.css';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={EventsIndex} />
                <Route path="/events/new" component={EventsNew} />
            </Switch>
        </BrowserRouter>
	</Provider>,document.getElementById('root')
);

serviceWorker.unregister();
