import React from 'react';
import './SignIn.css';

function SignIn(){
    return(
        <div className="logInForm">
            <h4>Log In</h4>
            <form>
                <input className="email" placeholder="email" />
                <input className="password" placeholder="*****" />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;