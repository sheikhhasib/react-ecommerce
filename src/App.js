import React from 'react';
import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="">
      
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/shop">
            <Header></Header>
            <Shop></Shop>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
