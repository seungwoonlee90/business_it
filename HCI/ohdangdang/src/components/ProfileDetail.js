import React from 'react';
import './ProfileDetail.css';
import auth from '../fbBase';

function Profile(){
    let email = auth.currentUser.email;
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
                auth.signOut();
                window.location.hash = '/'
            }}>Log out</button>
        </div>
        </>
    )
}

export default Profile;