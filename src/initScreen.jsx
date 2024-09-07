import LoginPage from "./pages/login_page/loginPage.jsx";
import CreateUser from "./pages/create_user/createUser";
import { useState } from "react";
import './App.css'

const InitScreen = () => {
  const [toggleSign, setToggleSign] = useState(false);
  let buttonName = toggleSign ? "Log in " : "Sign up";
  return (
    <div className="mainInitScreen">
      <header>
        Commute
        <button
          onClick={() => {
            setToggleSign(!toggleSign);
          }}
        >
          {buttonName}
        </button>
      </header>
      <main>
        {toggleSign ? <CreateUser /> : <LoginPage />}
        {/* <LoginPage /> */}
        {/* <CreateUser /> */}
      </main>
      <footer>lsdkfjksdjf</footer>
    </div>
  );
};

export default InitScreen;
