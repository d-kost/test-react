import React from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import TerminalsPage from './components/pages/TerminalsPage';
import BuyersPage from './components/pages/BuyersPage';

import { Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route path='/terminals'>
          <TerminalsPage />
        </Route>

        <Route path='/buyers/:id'>
          <TerminalsPage />
        </Route>

        <Route path='/buyers'>
          <BuyersPage />
        </Route>
        
        <Route path='/'>
          <HomeContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
