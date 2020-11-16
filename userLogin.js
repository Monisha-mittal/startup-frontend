import React from 'react';
import './userLogin.css';
import {Link} from 'react-router-dom';

function userLogin() {
    return(
        <div className="userLogin">
            <div className="userLoginContainer">
                <h1>USER LOGIN</h1>
                <form>
                    <center>
                        <label>Phone No.</label>
                        <input type="text" placeholder="Enter Phone No."/>
                    </center>
                    <center>
                        <link to="/otp">
                            <button type="submit" className="otp_button">Generate OTP</button>
                        </link>
                    </center>
                </form>
            </div>
        </div>
    )    
}
export default userLogin;