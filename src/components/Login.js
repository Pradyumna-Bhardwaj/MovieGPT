import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef();
  const password = useRef();
  const displayName = useRef();
  const dispatch = useDispatch();

  const isToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignInButton = () => {
    message = validateForm(email.current.value, password.current.value);
    setErrorMsg(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen">
      <div className="relative z-30">
        <Header />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          className="w-full h-screen object-cover absolute top-0 left-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_medium.jpg"
          alt="background"
        />
      </div>

      {/* Form Container */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-32 mx-auto right-0 left-0 bg-black/85 text-white p-8 w-3/12 z-20 rounded"
      >
        <h1 className="text-white text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="block w-full p-2 mb-4 bg-gray-700 rounded"
            type="text"
            placeholder="Full Name"
            ref={displayName}
          />
        )}
        <input
          className="block w-full p-2 mb-4 bg-gray-700 rounded"
          type="text"
          placeholder="Email"
          ref={email}
        />
        <input
          className="block w-full p-2 mb-4 bg-gray-700 rounded"
          type="password"
          placeholder="Password"
          ref={password}
        />
        <p className="p-1 text-red-500">{errorMsg}</p>
        <button
          className="bg-red-600 w-full p-2 rounded-lg cursor-pointer"
          onClick={handleSignInButton}
        >
          {isSignInForm ? "Login" : "Sign Up"}
        </button>
        <p
          className="mt-2 pt-2 cursor-pointer hover:text-red-400"
          onClick={isToggle}
        >
          {isSignInForm
            ? "New User? Sign Up now"
            : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
