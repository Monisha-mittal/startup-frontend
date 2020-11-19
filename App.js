import React from'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import LoginHeader from './LoginHeader.js';
import userLogin from './userLogin';
import otp from './otp';

function App(){
  return (
    <Router>
      <div className="app">
        <LoginHeader /> 
        <Route path="/userLogin" component={userLogin} />
        <Route path="/otp" component={otp} />
      </div>
    </Router>
  );
}
export default App;