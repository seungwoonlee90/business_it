import React from "react";
import auth from "../fbBase";

function Profile() {
  let user = auth.currentUser.email;

  return (
    <div className="Profile">
      <div className="thumb">{user}</div>
    </div>
  );
}

export default Profile;
