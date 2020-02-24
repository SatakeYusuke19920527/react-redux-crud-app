import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import EventsIndex from './components/EventsIndex';
import EventsNew from './components/EventsNew';
import EventsShow from './components/EventsShow';
import './index.css';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
    
const store = createStore(reducer, enhancer);

ReactDOM.render(
    <MuiThemeProvider>
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/events/new" component={EventsNew} />
                <Route path="/events/:id" component={EventsShow} />
                <Route exact path="/" component={EventsIndex} />
                <Route exact path="/events" component={EventsIndex} />
            </Switch>
        </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,document.getElementById('root')
    );
    
    serviceWorker.unregister();
