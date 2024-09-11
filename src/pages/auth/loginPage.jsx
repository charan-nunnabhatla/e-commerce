// import "./login_page/signingPage.css";
import './authStyle.css'
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/mnt/b93501fc-d972-4d8f-90d9-0a399447fed9/Coding/Apps/React/commute/src/firebaseconfig.js";
import React from 'react';

const LoginPage = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, `${userName}@commute.com`, password);
      alert("login successful");
    } catch (e) {
      setError(e.message);
      console.error(error);
      alert('Invalid User name/password')
    }
  };

  return (
    <div className="loginPage">
      <div className="body">
        <form onSubmit={handleLogin}>
          <input
            placeholder="User name"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder="Password"
            type="Password"
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input placeholder="Log in" type="submit" value="Log in" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
