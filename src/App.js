import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import New from './components/New';
import Header from "./components/Header";

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Route
                        path="/" 
                        component={Header}
                    />
                    <main role="main">
                        <Switch>
                            <Route
                                path="/"
                                exact={true}
                                component={Home}
                            />
                            <Route 
                                path="/new" 
                                component={New}
                            />
                        </Switch>
                    </main>
                </Fragment>
            </Router>
    );
  }
}

export default App;
