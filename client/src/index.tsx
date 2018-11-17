import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initializeStore } from './store/store';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = initializeStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
