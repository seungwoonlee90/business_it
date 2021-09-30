import React from 'react';
import firebase from '../Firebase';


function Upload(props) {
    let user = props.user
    if (!user) {
        window.location.href ="/profile"
    }

    const toUpload = async (e) => {
        e.preventDefault();
        await firebase.db.collection('product').add({
          uid : user.uid,
          title : document.getElementById('title').value,
          body : document.getElementById('body').value,
          date : new Date()
    })
        window.location.href ="/"
    };


    return (
        <>
            <div className="profileBody">
                <article className="profile">
                    <img src="https://doodleipsum.com/600?shape=circle&bg=ceebff" alt="profile"/>
                    <h1>admin</h1>
                    <h2>@HCI</h2>
                    <p>😍</p>
                    <input type="text" />
                </article>
                <button onClick={toUpload}>Upload</button>
            </div>
        </>
    )
}

export default Upload;