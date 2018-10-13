import { combineReducers } from 'redux';

import create from './pages/create';
import confirm from './pages/confirm';
import deckBuilderDashboard from './pages/deckBuilderDashboard';

export default combineReducers({
    pages: combineReducers({
        create: create,
        confirm: confirm,
        deckBuilderDashboard: deckBuilderDashboard
    })
});