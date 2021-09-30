import React from 'react';
import './ProfileDetail.css';
import firebase from '../Firebase';

function Profile(){
    let email = firebase.auth.currentUser.email;
    return (
        <>
        <div className="profileBody">
            <article className="profile">
                <img src="https://doodleipsum.com/600?shape=circle&bg=ceebff" alt="profile"/>
                <h1>admin</h1>
                <h2>@HCI</h2>
            </article>
            <ul className="contact">
                <li>
                    <span>{email}</span>
                </li>		
            </ul>
            <button onClick={(e)=>{
                e.preventDefault();
                firebase.auth.signOut();
                window.location.href = '/'
            }}>Log out</button>
        </div>
        </>
    )
}

export default Profile;