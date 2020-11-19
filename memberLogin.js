import React from 'react';
import './memberLogin.css';
import {Link} from 'react-router-dom';
 
function memberLogin(){
    return(
        <div className="mlogin">
            <a class="mlheader"><b>MEMBER LOGIN</b></a>
            <form>
                <label class="username">Username/ User ID</label>
                <div class="enteruname">                 
                    <input type="text" placeholder="Enter your username/ID"/>
                </div>
                <label class="pswrd">Password</label>
                <div class="enterpwd">                 
                    <input type="text" placeholder="Enter password"/>
                </div><br/>
                <a href="./" class="forgot">Forgot Password ?</a>
                <a href="./userLogin" class="user">Are you a user ?</a>
                <button class="loginbtn">
                    <span class="btntxt">Log In</span>
                </button>
                <button class="signupbtn">
                    <span class="bttntxt">Sign-Up</span>
                </button>
            </form>
        </div>
    )          
}
export default memberLogin;