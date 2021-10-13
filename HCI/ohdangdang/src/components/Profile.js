import React from 'react';
import auth from '../fbBase'
import ProfileDetail from './ProfileDetail'
import SignIn from './SignIn';

function Profile(){
    let user = auth.currentUser;
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