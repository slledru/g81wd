import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css'
import store from './store'
import { Provider } from 'react-redux'
import { fetchItems } from './actions/action_items'
import { fetchProducts } from './actions/action_products'

store.dispatch(fetchItems())
store.dispatch(fetchProducts())

ReactDOM.render(
  <Provider store={store}>
    <App copyright="1999" />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
