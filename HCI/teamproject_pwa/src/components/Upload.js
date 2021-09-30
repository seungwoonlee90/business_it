import React from 'react';
import firebase from '../Firebase';


function Upload() {

    const toUpload = async (e) => {
        e.preventDefault();
        await firebase.db.collection('product').add({
          uid : firebase.auth.currentUser.uid,
          title : document.getElementById('title').value,
          body : document.getElementById('body').value,
          date : new Date()
    })
        window.location.href ="/"
    };


    return (
        <div className="container">
        <span>Upload to firebase</span>
        <form onSubmit= {toUpload}>
            <input type="text" id="title" placeholder="title" />
            <input type="text" id="body" placeholder="body" />
            <button id="send">올리기</button>
        </form>
    </div>
    )
}

export default Upload;