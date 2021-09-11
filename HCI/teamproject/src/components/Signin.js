import React from 'react';
import firebase from "firebase/compat/app";
import 'firebase/auth';

class Signin extends React.Component {

    render() {

        const Login = async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value
            const password = document.getElementById('password').value
            await firebase.auth().signInWithEmailAndPassword(email, password)
            window.location.href = '/'
        };

        return(
        <form onSubmit = {Login}>
            <input type="text" id="email" placeholder="email" required />
            <input type="password" id="password" placeholder="password" required />
            <button id="login">로그인</button>
        </form>
        )
    }
}

export default Signin;