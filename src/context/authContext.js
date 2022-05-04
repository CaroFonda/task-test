import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const signin = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const signout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <authContext.Provider value={{ signup, signin, user, signout }}>
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
