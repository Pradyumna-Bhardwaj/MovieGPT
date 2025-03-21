import React, { useEffect } from "react";
import { auth } from "../utils/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearchView = useSelector((store)=>store.gpt.showGptSearchView)
  const handleGptToggle = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        // to be created error page
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-40"
        src={NETFLIX_LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="flex pt-2">
          <button
            className="bg-black p-2 rounded-lg text-red-500 cursor-pointer w-24 h-10 mx-2"
            onClick={handleGptToggle}
          >
            {showGptSearchView?"HomePage":"GPT Search"}
          </button>
          <h3 className="text-red-500 p-2 text-xl underline mx-2">
            {user?.displayName}
          </h3>
          <button
            className="bg-black p-2 rounded-lg text-red-500 cursor-pointer w-24 h-10 ml-2"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
