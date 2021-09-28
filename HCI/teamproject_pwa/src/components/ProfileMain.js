import React from 'react';
import ProfileDetail from './ProfileDetail'
import SignIn from './SignIn';
import auth from '../Firebase';

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