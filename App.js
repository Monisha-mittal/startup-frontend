import React from'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import LoginHeader from './LoginHeader';
import userLogin from './userLogin';
import otp from './otp';
import memberLogin from './memberLogin';
import signup from './signup';
import verify from './verify';

function App(){
  return (
    <Router>
      <div className="app">
        <LoginHeader /> 
        <Route path="/userLogin" component={userLogin} />
        <Route path="/otp" component={otp} />
        <Route path="/memberLogin" component={memberLogin} />
        <Route path="/signup" component={signup} />
        <Route path="/verify" component={verify} />
      </div>
    </Router>
  );
}
export default App;