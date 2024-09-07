import "./App.css";
import InitScreen from "./initScreen";
import { auth } from "./firebaseconfig";
import { useState, useEffect } from "react";
import HomePage from "./pages/homepage/HomePage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubcribed();
  }, []);

  console.log(user);
  return <>{user ? <HomePage user={user} /> : <InitScreen />}</>;
}

export default App;
