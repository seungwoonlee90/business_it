import React, { useState } from 'react';
import './SignUp.css';
import auth from '../Firebase';

function SignUp(){
    let [email, emailEdit] = useState();
    let [password, passwordEdit] = useState();
    let singUp = async(e) => {
        e.preventDefault();
        await auth.createUserWithEmailAndPassword(email, password);
        window.location.href = "/"
    }

    return(
        <div className="signUpForm">
            <h4>Sign Up</h4>
            <form onSubmit={singUp}>
                <input className="email" type="email" placeholder="💌 email" onChange={(e)=>{emailEdit(e.target.value)}} required />
                <input className="password" type="password" placeholder="🔑 password" onChange={(e)=>{passwordEdit(e.target.value)}} required />
                <button className="signUp">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;