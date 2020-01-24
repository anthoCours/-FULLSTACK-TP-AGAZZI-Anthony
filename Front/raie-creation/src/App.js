import React from 'react';
import Home from './containers/Home';
import Customer from './containers/Customer';
import HairDresser from './containers/HairDresser';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path='/' >
          <Redirect
            to={{
              pathname: "/home",
            }}
          />
        </Route>
        <Route path="/home" children={<Home/>} />
        <Route path="/client" children={<Customer/>} />
        <Route path="/coiffeur" children={<HairDresser/>} />
      </Switch>
      </div>
    </Router>

  );
}

export default App;
