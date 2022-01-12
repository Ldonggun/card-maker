import React from 'react';
import style from './app.module.css';
//router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import { Login } from './components/index';
//pages
import { Maker } from './pages/index';
function App({ FileInput, authService }) {
  return (
    <div className={style.wrap}>
      <BrowserRouter>
        <Switch>
          <Route
            path='/'
            exact
            render={() => <Login authService={authService} />}
          />
          <Route exact path='/maker'>
            <Maker FileInput={FileInput} authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
