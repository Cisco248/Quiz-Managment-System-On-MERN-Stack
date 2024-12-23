import React from "react";

function QuizSection() {
  return (
    <div className="pt-10 w-3/4 m-auto">
      <div>
        <div className="font-bold text-3xl pb-5 text-indigo-400 text-start">
          Discover
        </div>
        <div className="p-10 bg-gray-100">
          <div className=" h-[250px]">
            <div>
              <img
                className="rounded-3xl w-[250px] absolute h-[250px]"
                src="/public/image 22.png"
                alt="Image"
              />
            </div>
            <div className="relative top-[170px] bg-gray-300 rounded-br-3xl rounded-bl-3xl text-xl p-3 h-[80px] w-[250px]">
              <h1 className="text-xl font-medium">Title</h1>
              <h2 className="text-sm font-normal">Author: </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizSection;
