import * as React from 'react';

import './App.css';

import { Route, BrowserRouter, Switch } from "react-router-dom";
import {Home} from './components/pages/Home';
import CreateContainer from './components/pages/create/CreateContainer';

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/create" component={CreateContainer} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
