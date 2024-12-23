import React, { useState } from "react";
import Popup from "./PopUp"; // Adjust the path if needed

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="App">
      <button
        onClick={togglePopup}
        className="mt-10 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Open Popup
      </button>
      <Popup show={showPopup} handleClose={togglePopup}>
        <h2 className="text-xl font-bold">Popup Content</h2>
        <p>This is the content of the popup!</p>
      </Popup>
    </div>
  );
};

export default App;
