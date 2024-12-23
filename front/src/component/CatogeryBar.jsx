import React from "react";
import { Link } from "react-router-dom";

const CatogeryBar = () => {
  return (
    <div className="w-3/4 m-auto scroll-m-1">
      <div className="flex justify-start text-3xl font-bold text-indigo-400 pt-3 pb-5">
        Catogery
      </div>
      <div className="bg-gray-200 flex gap-3 text-center justify-center py-3">
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/maths"}>MATHS</Link>
        </h1>
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/econ"}>ECON</Link>
        </h1>
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/history"}>HISTORY</Link>
        </h1>
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/music"}>MUSIC</Link>
        </h1>
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/dance"}>DANCE</Link>
        </h1>
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/health"}>HEALTH</Link>
        </h1>
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/drama"}>DRAMA</Link>
        </h1>
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/it"}>IT</Link>
        </h1>
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/tecnology"}>TECNOLOGY</Link>
        </h1>
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/bs"}>BUSINESS STUDIES</Link>
        </h1>
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/acc"}>ACCOUNTING</Link>
        </h1>
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/art"}>ART</Link>
        </h1>
        <h1 className="bg-white rounded-3xl px-3 text-md font-semibold text-indigo-500 border-2 border-white hover:bg-transparent  hover:text-indigo-400 hover:border-2 hover:border-white cursor-pointer">
          <Link to={"/science"}>SCIENCE</Link>
        </h1>
      </div>
    </div>
  );
};

export default CatogeryBar;
