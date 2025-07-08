import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";

const authContext = createContext();
export const useAuth = () => useContext(authContext);
const initialState = {
  user: null,
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE":
      return { ...state, user: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const register = async (name, username, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      let person = userCredential.user;
      await updateProfile(person, { displayName: `${name} ${username}` });
      dispatch({ type: "GET_ONE", payload: person });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
  const checkCurrentUser = () => {
    return onAuthStateChanged(auth, (user) => {
      dispatch({
        type: "GET_ONE",
        payload: user,
      });
    });
  };
  useEffect(() => {
    checkCurrentUser();
  }, []);

  const googleProvider = new GoogleAuthProvider();
  async function loginWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      alert(error.message);
    }
  }
  const facebookProvider = new FacebookAuthProvider();
  async function facebook() {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (error) {
      alert(error.message);
    }
  }
  const logOutCurrent = () => signOut(auth);

  const values = {
    register,
    error: state.error,
    logOutCurrent,
    user: state.user,
    loginWithGoogle,
    facebook,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
