import React from "react";

const Popup = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "block" : "hidden";

  return (
    <div
      className={`${showHideClassName} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center`}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg relative w-1/2">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-black text-2xl font-bold"
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Popup;
