import React from "react";
import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../component/firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged In Successfully");
      toast.success("User Logged In Successfully", { position: "top-center" });
      window.location.href = "/home";
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "top-center" });
    }
  };

  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      if (result.user) {
        toast.success("User Login Successfully", {
          position: "top-center",
        });
        window.location.href = "/home";
      }
    });
  }

  return (
    <div className="Desktop:flex h-dvh w-dvw Laptop:h-dvh Laptop:flex Laptop:justify-center Laptop:items-center">
      <div className="flex justify-center w-4/5">
        <div className="p-20 bg-indigo-500 justify-center rounded-3xl ">
          <div className="bg-transparent">
            <h1 className="font-bold text-6xl text-white Laptop:text-4xl bg-transparent">
              LOGIN
            </h1>
          </div>
          <form
            className="items-center justify-center flex-col bg-transparent"
            onSubmit={handleSubmit}
          >
            <div className="pt-8 bg-transparent">
              <input
                className="w-64 px-5 py-2 focus:ring-2 outline-indigo-400 rounded-full Laptop:max-w-48"
                type="text"
                placeholder="Email >>>"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="pt-6 bg-transparent">
              <input
                className="w-64 px-5 py-2 focus:ring-2 outline-indigo-400 rounded-full Laptop:max-w-48"
                type="password"
                placeholder="Password >>>"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="pt-5 bg-transparent">
              <button className="text-center bg-white px-8 py-2 rounded-full text-indigo-400 text-lg font-medium Laptop:text-sm Laptop:px-4 Laptop:py-1">
                LOGIN
              </button>
            </div>
            <div className="flex justify-center gap-3 my-5 bg-transparent">
              <h1 className="text-lg text-white font-semibold cursor-pointer Laptop:text-sm bg-transparent">
                Forget Password ?
              </h1>
            </div>
            <div className="flex justify-center gap-3 my-5 bg-transparent">
              <h1 className="font-semibold Laptop:text-sm bg-transparent">
                Do haven't Account ?{" "}
                <Link to={"/signup"} className="bg-transparent">
                  <span className="cursor-pointer text-white font-semibold Laptop:text-sm bg-transparent">
                    Sign UP Now!
                  </span>
                </Link>
              </h1>
            </div>
            <button onClick={googleLogin}>
              <div className="flex items-center justify-evenly px-10 py-1 bg-white rounded-xl">
                <img
                    className="h-[40px] w-[40px] bg-transparent"
                    src="./public/google_logo.svg"
                    alt=""
                  />
                <h1 className="text-lg font-normal font-Jost Laptop:text-sm bg-transparent">
                    Sign With{" "}
                    <span className="font-Poppins font-normal bg-transparent">GOOGLE</span>
                </h1>
                </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
