import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const Navibar = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log("User Is Not Find");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User Logged Out");
    } catch (error) {
      console.log("Error logging out: ", error.message);
    }
  }

  return (
    <div className="div py-3 shadow-lg bg-indigo-400">
      <div className="flex justify-between px-20">
        <div className="flex justify-center items-center gap-2">
          <svg
            width="60"
            height="50"
            viewBox="0 0 60 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Logo Vectet">
              <path
                d="M44.6438 34.6336L37.0128 27.5333C37.8187 22.9672 37.0953 20.7269 35.5996 17.1477C34.246 14.7655 33.3419 13.5657 31.1718 11.9549C27.6759 9.71422 25.0152 9.1603 21.5623 9.72947C17.2047 10.8745 15.2849 12.4418 12.895 15.6641C10.9452 19.0721 10.2755 21.2133 10.3513 25.5198C10.6324 28.5632 11.2185 30.1676 12.8008 32.832C14.8549 35.8594 16.4278 37.1332 20.055 38.5547C22.6938 39.3664 24.268 39.3657 27.215 38.6607L33.998 45.655C30.6874 47.3804 28.6675 47.9336 24.6713 48.3044C20.8586 48.3335 18.8556 47.9883 15.4387 46.9267C11.7387 45.3138 10.0274 44.1294 7.33664 41.7339C3.74264 37.7687 2.18951 35.3342 0.741942 30.3946C-0.524799 23.79 -0.2031 20.2971 1.96667 14.3924C4.05386 10.132 5.55734 8.09742 8.93821 5.17254C12.5242 2.54827 14.6481 1.39347 18.8303 0.403661C24.5718 -0.415346 27.6759 -0.0542784 33.056 2.09926C37.3403 4.27729 39.1564 5.87427 41.8175 9.09362C44.8579 13.599 46.0899 16.308 46.8106 21.7047C47.042 27.1282 46.5432 29.9512 44.6438 34.6336Z"
                fill="#ffff"
              />
              <path
                d="M42.6654 50L23.4465 31.9842C24.1774 30.9798 24.8141 30.4777 25.8018 29.7588C27.0418 29.066 27.7402 28.7675 29.0049 28.4871C30.5295 28.32 31.3246 28.3644 32.5849 28.699C34.0351 29.0966 34.8134 29.4947 36.0707 30.5006L37.0128 31.4544L44.6438 38.1308L60 29.5468L42.6654 50Z"
                fill="#ffff"
              />
            </g>
          </svg>

          <h1 className="text-2xl text-white font-bold font-roboto font">
            QUIZZIFY
          </h1>
        </div>
        <div className="flex justify-center items-center gap-5">
          <h1 className="text-lg font-bold text-white font-sans">
            Welcome, {userDetails && userDetails.name}
          </h1>
          <button
            className="bg-white border-white text-indigo-400 border-2 text-md font-semibold px-2 py-1 rounded-full hover:border-white hover:bg-indigo-400 hover:text-white"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navibar;
