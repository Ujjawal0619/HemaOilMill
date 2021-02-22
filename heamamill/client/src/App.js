import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './component/layout/Dashboard';
import Login from './component/auth/Login';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './component/routing/PrivateRoute';

function App() {
  return (
    <AuthState>
      <>
        <Router>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Router>
      </>
    </AuthState>
  );
}

export default App;
