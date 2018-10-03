import { combineReducers } from 'redux';

import create from './pages/create';
import confirm from './pages/confirm';

export default combineReducers({
    pages: combineReducers({
        create: create,
        confirm: confirm
    })
});