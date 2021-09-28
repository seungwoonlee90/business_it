import React, { useState } from 'react';
import './SignIn.css';
import auth from '../Firebase';

function SignIn(){

    let [email, emailEdit] = useState();
    let [password, passwordEdit] = useState();
    let LogIn = async(e) => {
        e.preventDefault();
        await auth.signInWithEmailAndPassword(email, password);
        console.log(auth.currentUser.uid);
        window.location.href = "/"
    }

    return(
        <div className="signInForm">
            <h4>Log In</h4>
            <form onSubmit={LogIn}>
                <input className="email" type="text" placeholder="email" onChange={(e)=>{emailEdit(e.target.value)}} required />
                <input className="password" type="password" placeholder="*****" onChange={(e)=>{passwordEdit(e.target.value)}} required />
                <button className="signIn">Sign In</button>
            </form>
                <button className="signUp" onClick={()=>{
                    window.location.href="/signup"
                }}>Sign Up</button>
        </div>
    )
}

export default SignIn;