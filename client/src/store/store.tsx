import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import root from '../reducers/root';


const initializeStore = function initializeStore() {
    return createStore(root, composeWithDevTools());
};

export { initializeStore };