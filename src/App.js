import React from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import TerminalsPage from './components/pages/TerminalsPage';
import BuyersPage from './components/pages/BuyersPage';
import Page404 from './components/pages/Page404';
import { Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/terminals'>
          <TerminalsPage />
        </Route>

        <Route path='/buyers/:id'>
          <TerminalsPage />
        </Route>

        <Route path='/buyers'>
          <BuyersPage />
        </Route>
        
        <Route exact path='/'>
          <HomeContainer />
        </Route>

        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
