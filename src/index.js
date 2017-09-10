import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/App/App';
import './index.css';
import configureStore from './ConfigureStore';
import createHistory from '../node_modules/history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

// There are multiple different types of Routers you can use. The Router will contain all Routes inside; A single JSX element must be returned from it
// The most common one is <BrowserRouter>

const history = createHistory(); //creating history of browser

// Redux Thunk middleware allows you to write actions that return a function. The thunk can be used to delay the dispatch of an action, or to dispatch only under certain conditions.

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore(devTools);
const router = (
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

registerServiceWorker();
