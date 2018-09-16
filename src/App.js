import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
            <Fragment>
                <header className="header">
                      <h1 className="title">Welcome to Cake</h1>
                </header>
                <main role="main">
                    <Router>
                        <Switch>
                            <Route path="/" component={Home}/>
                        </Switch>
                    </Router>
                </main>
            </Fragment>
    );
  }
}

export default App;
