import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={() => <div></div>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
