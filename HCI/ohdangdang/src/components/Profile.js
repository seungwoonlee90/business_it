import React from "react";
import auth from "../fbBase";

function Profile() {
  let user = auth.currentUser.email;

  const Logout = async (e) => {
    e.preventDefault();
    await auth.signOut();
    window.location.hash = "/";
  };

  const Upload = (e) => {
    e.preventDefault();
    window.location.hash = "/upload";
  };

  return (
    <div className="Profile">
      <img className="thumb" alt="profile" />
      <div className="profile-inner">
        <div className="profile-email">{user}</div>
        <button onClick={Upload} className="Upload">
          Upload
        </button>
        <button onClick={Logout} className="signIn">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
