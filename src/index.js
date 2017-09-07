import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import configureStore from './ConfigureStore';
import { Provider } from 'react-redux';
import createHistory from '../node_modules/history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating

const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore(devTools);

// Now you can dispatch navigation actions from anywhere!

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
