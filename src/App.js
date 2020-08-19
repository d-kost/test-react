import React from 'react';
import './App.css';
import HomeContainer from './containers/pages/HomeContainer';
import TerminalsPage from './components/pages/TerminalsPage';

import { Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route path='/terminals'>
          <TerminalsPage />
        </Route>

        <Route path='/buyers/:id'>
          <HomeContainer />
        </Route>

        <Route path='/buyers'>
          <TerminalsPage />
        </Route>
        
        <Route path='/'>
          <HomeContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
