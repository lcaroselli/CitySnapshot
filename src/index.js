import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import App from './components/App/App';
import './index.css';
import configureStore from './ConfigureStore';
import createHistory from '../node_modules/history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const middleware = routerMiddleware(history);
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
