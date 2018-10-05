import * as React from 'react';

import './App.css';

import { Route, BrowserRouter, Switch } from "react-router-dom";
import CreateContainer from './components/pages/create/CreateContainer';
import ConfirmContainer from './components/pages/confirm/ConfirmContainer';
import {Home} from './components/pages/home/Home';

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/create" component={CreateContainer} />
                    <Route exact path="/confirm" component={ConfirmContainer} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
