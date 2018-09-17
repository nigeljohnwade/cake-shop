import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import New from './components/New';
import Detail from './components/Detail';
import Header from "./components/Header";
import ScrollTop from './components/ScrollTop';

class App extends Component {
    render() {
        return (
            <Router>
                <ScrollTop>
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
                                <Route
                                    path="/cake/:id"
                                    component={Detail}
                                />
                            </Switch>
                        </main>
                    </Fragment>
                </ScrollTop>
            </Router>
        );
    }
}

export default App;
