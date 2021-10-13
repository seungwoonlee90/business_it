import React, { useState } from 'react';
import './SignIn.css';
import auth from '../fbBase';

function SignIn(){

    let [email, emailEdit] = useState();
    let [password, passwordEdit] = useState();

    let LogIn = async(e) => {
        e.preventDefault();
        await auth.signInWithEmailAndPassword(email, password);
        auth.onAuthStateChanged(function(user){
            window.location.hash ="/"
        })
    }

    let signup = ()=>{
        window.location.hash="/signup"
    }

    return(
        <div className="signInForm">
            <h4>Log In</h4>
            <form onSubmit={LogIn}>
                <input className="email" type="email" placeholder="💌 email" onChange={(e)=>{emailEdit(e.target.value)}} required />
                <input className="password" type="password" placeholder="🔑 password" onChange={(e)=>{passwordEdit(e.target.value)}} required />
                <button className="signIn">Sign In</button>
            </form>
            <p className="signUp"> You are new? <a onClick={signup} className="link">Create new</a> ✨</p>
        </div>
    )
}

export default SignIn;