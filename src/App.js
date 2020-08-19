import React from 'react';
import './App.css';
import HomeContainer from './containers/pages/HomeContainer';

import { Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route path='/terminals'>
          <HomeContainer />
        </Route>

        <Route path='/buyers/:id'>
          <HomeContainer />
        </Route>

        <Route path='/buyers'>
          <HomeContainer />
        </Route>
        
        <Route path='/'>
          <HomeContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
