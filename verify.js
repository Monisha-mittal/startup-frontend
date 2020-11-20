import React from 'react';
import './verify.css';
import {Link} from 'react-router-dom';

function verify(){
    return(
        <section className="verification">
        <section className="container">
        <form>
            <span class="writeup_verify">A verification Email/ Message has been sent to your Email address/ Phone No.<br/>
            Click on the link and continue with your sign up process with us.<br/>
            If you did not recieve any Email/ Message click on Resend. This might take a few minutes.</span>
            <br/>
            <div class="lastline">
            <a href="./" class="resend">Resend</a>
            <a href="./signup" class="users">Go Back</a>
            </div>
        </form>
        </section>
        </section> 
    )
}    
export default verify;       