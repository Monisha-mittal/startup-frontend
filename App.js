import React from'react';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import LoginHeader from './LoginHeader.js';
import userLogin from './userLogin.js';

function App(){
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route path="/login">
          <LoginHeader />
          <userLogin />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
