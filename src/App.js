import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import login from "./components/login";
import register from "./components/register";
import user from "./components/user";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import './index.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={login} exact />
            <Route path="/register" component={register} />
            <Route path="/user" component={user} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};
export default App; 