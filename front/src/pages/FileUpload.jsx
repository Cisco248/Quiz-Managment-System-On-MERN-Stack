import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"];

  const handleFileChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError(".png, .jpeg, .jpg or .gif ");
    }
  };

  const handleUpload = () => {
    if (!file) {
      setError("Incampability Format!");
      return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, `uploads/${file.name}`);
    const metadata = {
      contentType: "image/png",
    };

    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDownloadURL(downloadURL);
          setError("");
        });
      }
    );
  };

  return (
    <div className="bg-gray-200 m-64 flex flex-col items-center justify-center">
      <div>
        <div className="mt-10">
          <h1 className="font-bold text-2xl text-indigo-400">
            Quiziffy Development Page
          </h1>
        </div>
        <div className="flex items-center justify-center mt-10">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center h-64 w-80 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-300 hover:bg-gray-200"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-indigo-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <h1 className="mb-2 text-sm text-indigo-400">
                Click to upload or drag and drop
                {file && (
                  <p>
                    File Added Successfully: <p>{file.name}</p>
                  </p>
                )}
              </h1>
              <h1 className="text-xs text-gray-400">
                {error && (
                  <p className="mb-2 text-sm text-indigo-400 font-semibold">
                    {error}
                  </p>
                )}
              </h1>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div className="p-10 flex flex-col gap-2">
          {progress > 0 && (
            <progress className="w-full rounded-xl" value={progress} max="100">
              {progress}%
            </progress>
          )}
          <button
            className="bg-indigo-400 p-2 rounded-xl"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
