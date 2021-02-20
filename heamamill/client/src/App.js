import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './component/layout/Dashboard';
import Login from './component/auth/Login';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
