import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import App from './components/App/App';
import './index.css';
import configureStore from './ConfigureStore';
import createHistory from '../node_modules/history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

// There are multiple different types of Routers you can use. Each have these two things in common: The Router will contain all Routes inside; A single JSX element must be returned from it.

// The most common one you will use is <BrowserRouter>.
// BrowserRouter uses HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.

const history = createHistory(); //creating history of browser
const middleware = routerMiddleware(history); // Build the middleware for intercepting and dispatching navigation actions
// Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore(devTools);
const router = (
  <Provider store={ store }>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

registerServiceWorker();
