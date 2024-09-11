import LoginPage from "./pages/auth/loginPage.jsx";
import CreateUser from "./pages/auth/createUser.jsx";
import { useState } from "react";
import "./initScreenStyle.css";
import React from "react";

const InitScreen = () => {
  const [toggleSign, setToggleSign] = useState(false);
  let buttonName = toggleSign ? "Log in " : "Sign up";
  return (
    <div className="initScreen">
      <header className="initHeader">
        Commute
        <button
          onClick={() => {
            setToggleSign(!toggleSign);
          }}
        >
          {buttonName}
        </button>
      </header>
      <main className="initMain">
        {toggleSign ? <CreateUser /> : <LoginPage />}
        {/* <LoginPage /> */}
        {/* <CreateUser /> */}
      </main>
      <footer className="initFooter">Footer</footer>
    </div>
  );
};

export default InitScreen;
