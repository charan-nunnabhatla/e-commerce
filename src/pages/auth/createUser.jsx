import "../auth/authStyle.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "/mnt/b93501fc-d972-4d8f-90d9-0a399447fed9/Coding/Apps/React/commute/src/firebaseconfig.js";
import React from "react";

const CreateUser = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, `${userName}@commute.com`, password);
      alert(`user ${userName} is successfully created`);
    } catch (e) {
      setError(e.message);
      console.error(error);
      alert('user name already in use')
    }
  };

  return (
    <div className="loginPage">
      <div className="body">
        <form onSubmit={handleLogin}>
          <input
            placeholder="Create user name"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder="Password"
            type="Password"
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input placeholder="Create" type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
