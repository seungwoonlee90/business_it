import React from 'react';
import './Profile.css';
import SignIn from './SignIn';

function Profile(){
    return (
        <>
        <SignIn />
        {/* <div className="profileBody">
            <article className="profile">
                <img src="https://doodleipsum.com/600?shape=circle&bg=ceebff" alt="profile"/>
                <h1>teamproject_admin</h1>
                <h2>@HCI</h2>
            </article>
            <ul className="contact">
                <li>
                    <span>admin@gmail.com</span>
                </li>		
            </ul>
            <button onClick={()=>{
                window.location.href = '/'
            }}>Log out</button>
        </div> */}
        </>
    )
}

export default Profile;