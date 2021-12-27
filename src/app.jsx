import React from 'react';
import './app.module.css';
//router
import { BrowserRouter, Route } from 'react-router-dom';

//components
import { Login } from './components/index';
//pages
import { Maker } from './pages/index';
function App({ authService }) {
  return (
    <>
      <BrowserRouter>
        <Route
          path='/'
          exact
          render={() => <Login authService={authService} />}
        />
        <Route path='/maker' exact component={Maker} />
      </BrowserRouter>
    </>
  );
}

export default App;
