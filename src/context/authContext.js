import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const signin = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser("currentUser", currentUser);
    });
  }, []);

  return (
    <authContext.Provider value={{ signup, signin, user }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
  if (!authContext) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
};
