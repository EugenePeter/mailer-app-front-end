import React from 'react';
import { Switch, Route } from "react-router-dom";



import Header from './components/header/Header'
import Admin from './pages/Admin';
import User from './pages/User';

function App() {

  return (
    <Switch>
      <Route exact path="/">
        <Header />
      </Route>

      <Route path="/admin">
        <Admin />
      </Route>

      <Route path="/user">
        <User />
      </Route>
    </Switch>
  )
}

export default App;
