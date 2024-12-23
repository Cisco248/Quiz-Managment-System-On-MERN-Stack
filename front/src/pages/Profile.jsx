import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../component/firebase";
import Navibar from "../component/Navbar";
import Footer from "../component/Footer";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      try {
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        }
      } catch (error) {
        console.log("User Is Not Find");
      }
      console.log(user);
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
    <div className="flex flex-col h-full">
      <Navibar />
      <div className="flex-col justify-center">
        <h1 className="text-indigo-400 font-sans font-bold text-4xl text-start pl-48 py-10">
          Profile
        </h1>
        {userDetails ? (
          <>
            <div className="div">
              <div className="justify-center items-center">
                <img
                  className="flex justify-center items-center m-auto"
                  de
                  src="./ProPicDefault.svg"
                  alt=""
                />
                <div className="flex justify-center ">
                  <div className="div ">
                    <div className="flex w-[300px] h-10 pt-[7px] pb-[7px] pl-[21px] rounded-[50px] border-2 border-indigo-400 text-indigo-400 text-base font-bold font-['Poppins'] mt-6 mb-3">
                      Name: {userDetails.name}
                    </div>
                    {/* <div
                      className="flex w-[300px] h-10 pt-[7px] pb-[7px] pl-[21px] rounded-[50px] border-2 border-indigo-400 text-indigo-400 text-base font-bold font-['Poppins'] mb-3"
                    >
                      Age: {defaultValue}
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="div">
                  <div className="flex w-[300px] h-10 pt-[7px] pb-[7px] pl-[21px] rounded-[50px] border-2 border-indigo-400 text-indigo-400 text-base font-bold font-['Poppins'] mb-3">
                    Email: {userDetails.email}
                  </div>
                  <div className="flex w-[300px] h-10 pt-[7px] pb-[7px] pl-[21px] rounded-[50px] border-2 border-indigo-400  text-indigo-400 text-base font-bold font-['Poppins'] mb-3">
                    Mobile No:{userDetails.mobile}{" "}
                  </div>
                  <div className="flex w-[300px] h-10 pt-[7px] pb-[7px] pl-[21px] rounded-[50px] border-2 border-indigo-400 text-indigo-400 text-base font-bold font-['Poppins'] mb-3">
                    Password: {userDetails.password}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="div">
            <div className="justify-center items-center">
              <img
                className="flex justify-center items-center m-auto"
                src="./ProPicDefault.svg"
                alt=""
              />
              <div className="flex justify-center ">
                <div className="div ">
                  <div className="flex w-[300px] h-10 pt-[7px] pb-[7px] pl-[21px] rounded-[50px] border-2 border-indigo-400 text-indigo-400 text-base font-bold font-['Poppins'] mt-6 mb-3">
                    Name: Loading
                  </div>
                  {/* <div className="flex w-[300px] h-10 pt-[7px] pb-[7px] pl-[21px] rounded-[50px] border-2 border-indigo-400 text-indigo-400 text-base font-bold font-['Poppins'] mb-3">
                    Age: {}
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="div">
                <div className="flex w-[300px] h-10 pt-[7px] pb-[7px] pl-[21px] rounded-[50px] border-2 border-indigo-400 text-indigo-400 text-base font-bold font-['Poppins'] mb-3">
                  Email: Loading
                </div>
                <div className="flex w-[300px] h-10 pt-[7px] pb-[7px] pl-[21px] rounded-[50px] border-2 border-indigo-400  text-indigo-400 text-base font-bold font-['Poppins'] mb-3">
                  Mobile No: Loading{" "}
                </div>
                <div className="flex w-[300px] h-10 pt-[7px] pb-[7px] pl-[21px] rounded-[50px] border-2 border-indigo-400 text-indigo-400 text-base font-bold font-['Poppins'] mb-3">
                  Password: Loading
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex-col gap-2">
          <div className="pt-2 pb-4">
            <button className="bg-indigo-400 px-6 py-1 rounded-2xl text-white font-semibold border-indigo-400 border-2 hover:border-indigo-400 hover:border-2 hover:text-indigo-500 hover:bg-transparent">
              EDIT
            </button>
          </div>
          <div className="pt-2 pb-6">
            <button className="bg-indigo-400 px-6 py-1 rounded-2xl text-white font-semibold border-indigo-400 border-2 hover:border-indigo-400 hover:border-2 hover:text-indigo-500 hover:bg-transparent">
              DELETE
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
