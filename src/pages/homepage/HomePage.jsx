import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import "./homePage.css";
import CardList from "../../components/card";
import React from "react";

const HomePage = ({ user }) => {
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="homePage">
      <header className="homePageHeader">
        <h1>Grocery</h1>
        <button onClick={handleSignOut}>Sign out</button>
        <button>Add</button>
      </header>
      <main className="homePageMain">
        <CardList />
      </main>
      <footer className="homePageFooter">Home Page Footer</footer>
    </div>
  );
};

export default HomePage;
