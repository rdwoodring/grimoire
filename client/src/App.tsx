import * as React from 'react';

import './App.css';

import { Route, BrowserRouter, Switch } from "react-router-dom";

import CreateContainer from './components/pages/create/CreateContainer';
import ConfirmContainer from './components/pages/confirm/ConfirmContainer';
import DeckBuilderDashboardContainer from './components/pages/deck-builder-dashboard/DeckBuilderDashboardContainer';
import {Home} from './components/pages/home/Home';

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/create" component={CreateContainer} />
                    <Route exact path="/confirm" component={ConfirmContainer} />
                    <Route exact path="/deckbuilder" component={DeckBuilderDashboardContainer} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
