import React from 'react';
import './App.css';
import FloodFill from './pages/FloodFill/index'
import GraphTravesal from './pages/GraphTravesal/index'
import { Router, Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={FloodFill} />
        <Route path='/graph' exact component={GraphTravesal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
