import React from 'react';
import './otp.css';
import {Link} from 'react-router-dom';
function otp(){
    return(
        <section className="otp"> 
            <section className="otp_container">
            <form>
                <h1 class="enter">Enter OTP</h1>
                <div class="enterotp">
                    <input type="text" placeholder="Enter 4-digit OTP" />
                </div>
                <a href="/" class="resendotp">Resend OTP?</a>
                <br/>
                <br/>
                <span class="writeup_otp"> A four digit OTP has been sent to your Email/Phone No. Do not share the OTP with anyone. If you did not recieve any OTP click on Resend OTP.</span>
                <br/>
                <button class="otpsubmit">
                    <span>Submit</span>
                </button>  
                <a href="/userLogin" class="backlink">Go Back</a>
                
            </form>        
        </section>
        </section>
    )
}
export default otp;