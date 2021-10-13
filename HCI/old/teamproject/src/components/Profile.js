import React from 'react';
import 'firebase/auth';
import { Form, Button } from 'react-bootstrap';
// import firebase from "firebase/compat/app";

function Signin() {

    const Login = async (e) => {
        e.preventDefault();
        /// need to edit
        const email = document.querySelectorAll('Form.Control')[0].value
        const password = document.querySelectorAll('Form.Control')[1].value
        console.log(email, password);
        // await firebase.auth().signInWithEmailAndPassword(email, password)
        window.location.href = '/'
    };

    return (
        <Form onSubmit = {Login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
    )
}

export default Signin;