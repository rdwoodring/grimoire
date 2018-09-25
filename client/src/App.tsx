import * as React from 'react';

import './App.css';

import { Route, BrowserRouter, Switch } from "react-router-dom";
import {Create} from './components/pages/Create';
import {Home} from './components/pages/Home';

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/create" component={Create} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
