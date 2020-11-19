import React from 'react';
import './userLogin.css';
import {Link} from 'react-router-dom';
 
function userLogin(){
    return(
        <section className="Login">
            <div class="heading"><b>USER LOGIN</b></div>
            <form>
                <label class="phone">Phone No.</label>
                <div class="enterphone">
                    
                    <input type="text" placeholder="Enter Phone No."/>
                    
                </div>
                <center>
                    <Link to="/otp">
                        <button type="submit" className="otp_button">Generate OTP</button>
                    </Link>
                </center>                    
            </form>            
            <a href="./memberLogin" class="member">Are you a member?</a>
            <h6 class="continue"> or continue with </h6>
            <button id="googlebtn">
                <span class="googleicon">
                    <img src='https://developers.google.com/identity/images/g-logo.png'></img>     
                </span>
                <span class="buttontext">Google Sign-in</span>
            </button>            
        </section>
    )    
}
export default userLogin;