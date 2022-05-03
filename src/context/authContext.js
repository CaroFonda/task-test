import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  return (
    <authContext.Provider value={{ signup }}>{children}</authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
  if (!authContext) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
};
