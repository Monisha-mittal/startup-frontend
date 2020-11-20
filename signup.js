import React from 'react';
import './signup.css';
import {Link} from 'react-router-dom';
 
function signup(){
    return(
        <div className="msignup">
            <a class="email"><b>MEMBER SIGN-UP</b></a>
            <form>
                <label class="emailid">Email-ID</label>
                <div class="enteremail">                 
                    <input type="text" placeholder="Enter Email-ID"/>
                </div>
                <label class="pswd">Password</label>
                <div class="enterpswd">                 
                    <input type="text" placeholder="Enter password"/>
                </div>
                <label class="designate" >Designation</label>
                <br/>
                <div class="choice">
                <input type="radio" value="doc" name="designation"/> Doctor
                <br/>
                <input type="radio" value="mf" name="designation"/> Medical Faculty
                <br/>
                </div>
                <a href="./memberLogin" class="memberlog">Already a member ?</a>
                <a href="./userLogin" class="user">Are you a user ?</a>
                </form>
            <form action="./verify">
                <button class="Mverify">
                    <span class="v">Verify And Sign Up</span>
                </button>
            </form>
        </div>
    )
}
export default signup;