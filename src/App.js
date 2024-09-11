import InitScreen from "./initScreen";
import { auth } from "./firebaseconfig";
import { useState, useEffect } from "react";
import HomePage from "./pages/homepage/HomePage";
import React from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubcribe();
  }, []);

  // console.log(user);
  // return <></>;
  return <>{user ? <HomePage user={user} /> : <InitScreen />}</>;
}

export default App;
