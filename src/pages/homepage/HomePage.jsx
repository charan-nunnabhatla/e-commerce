import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import "./homePage.css";

const HomePage = ({ user }) => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="mainHomePage">
      <header>
        Home Page
        <button onClick={handleSignOut}>Sign out</button>
      </header>
      <main>This is home page {user.email}</main>
      <footer></footer>
    </div>
  );
};

export default HomePage;
