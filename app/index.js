import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import configureStore from './store/configureStore'

const store = configureStore();

const rootElem = document.getElementById('root');
render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  rootElem
);
