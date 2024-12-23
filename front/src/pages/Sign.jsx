import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../component/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;

      console.log(user);
      console.log("User Register Is Successfully");

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
          password: password,
          mobile: mobile,
        });
      }
      toast.success("User Register Is Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className=" flex justify-center my-40 mx-40">
        <div className="bg-slate-200 flex items-center rounded-3xl ">
          <div className="bg-slate-200 ">
            <div className="text-center justify-center">
              <h1 className="text-slate-500 font-bold text-6xl">
                Welcome To <span className="text-indigo-400">Quizzify</span>
              </h1>
            </div>
            <div className="text-center justify-center px-10">
              <p className="py-4 text-slate-400 font-medium text-lg">
                "Discover endless fun and learning with our online quiz system!
                Explore diverse topics, challenge yourself, and enjoy an
                interactive way to test your knowledge. Start playing and dive
                into a world of quizzes today!".
              </p>
            </div>
          </div>
          <form
            className="py-20 bg-indigo-400 justify-center rounded-r-3xl px-32"
            onSubmit={handleRegister}
          >
            <h1 className="font-bold text-6xl text-white">SIGN UP</h1>
            <div className="items-center justify-center flex-col">
              <div className="pt-[30px] gap-3">
                <input
                  className="w-64 px-5 py-2 focus:ring-2 outline-indigo-400 placeholder-indigo-300 rounded-full"
                  type="text"
                  placeholder="Name >>>"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  unique
                />
              </div>
              <div className="pt-[10px] gap-3">
                <input
                  className="w-64 px-5 py-2 focus:ring-2 outline-indigo-400 placeholder-indigo-300 rounded-full"
                  type="text"
                  placeholder="Email >>>"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="pt-[10px]">
                <input
                  className="w-64 px-5 py-2 focus:ring-2 outline-indigo-400 placeholder-indigo-300 rounded-full"
                  type="password"
                  placeholder="Password >>>"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="pt-[10px]">
                <input
                  className="w-64 px-5 py-2 focus:ring-2 outline-indigo-400 placeholder-indigo-300 rounded-full"
                  type="number"
                  placeholder="Mobile Number >>>"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="div pt-5">
                <button className="text-center bg-white px-5 py-2 rounded-full text-indigo-400 text-lg font-medium">
                  SIGN UP
                </button>
              </div>
              <div className="flex justify-center gap-3 my-5">
                <h1 className="font-semibold">
                  If You Have Already Account ?{" "}
                  <Link to={"/"}>
                    <span className="cursor-pointer text-white font-semibold">
                      Login Now!
                    </span>
                  </Link>
                </h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign;
