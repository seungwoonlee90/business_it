import React from 'react';
import ProfileDetail from './ProfileDetail'
import SignIn from './SignIn';
import firebase from '../Firebase'

function Profile(){
    let user = firebase.auth.currentUser;
    return (
        <>
        {
            user
            ? 
            <ProfileDetail />
            
        :
            <SignIn />
        }
        </>
    )
}

export default Profile;