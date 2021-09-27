import React from 'react';
import Navbars from './components/Navbars';
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/" exact component={Navbars}/>
         <Route path="/portfolio"  component={Portfolio} />
      </Switch>
      <Home/>
    </Router>
  );
}

export default App;
