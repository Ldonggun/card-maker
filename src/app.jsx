import React from 'react';
import './app.module.css';
//router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import { Login } from './components/index';
//pages
import { Maker } from './pages/index';
function App({ authService }) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path='/'
            exact
            render={() => <Login authService={authService} />}
          />
          <Route exact path='/maker'>
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
