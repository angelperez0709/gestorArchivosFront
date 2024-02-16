import "./style.css";
import { useState, useRef } from "react";
import { MdOutlineDriveFolderUpload, MdUploadFile } from "react-icons/md";
import uploadFile from "../../services/uploadFile";
import Loader from "../Loader";

export default function ButtonNew({ token, id,onButtonClick }) {
  const [showOptions, setShowOptions] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const inputRef = useRef();

  const handleCreateFolder = () => {
    onButtonClick();
  };

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleImportFile = () => {
    document.querySelector("#file").click();
  };

  const changeFile = () => {
    if (inputRef.current.files.length > 0) {
      setShowLoader(true);
      const fileInput = inputRef.current;
      const file = fileInput.files[0];
      // check if file size is less than 3 MB
      if (file.size > 3000000) {
        alert("File size is too big");
        return;
      }
      const formData = new FormData();
      formData.append("file", file);
      uploadFile(file, token, id).then((data) => {
        if (typeof data.error != "undefined") {
          //clear input files
          fileInput.value = "";
        } else {
          setShowLoader(false);
        }
      });
    }
  };
  return (
    <>
      <div className="p-5 bg-gray-50 h-[--height-main]">
        <button
          className="shadow-[0_0.5px_3px_0_black] w-7/12 font-semibold p-2 rounded-md hover:bg-gray-200 cursor-pointer transition-all duration-300"
          onClick={handleButtonClick}
        >
          + New
        </button>

        {showOptions && (
          <ul className="mt-10 bg-white">
            <li
              onClick={handleCreateFolder}
              className="py-2 cursor-pointer hover:bg-gray-300 flex justify-center items-center gap-1 text-sm"
            >
              <MdOutlineDriveFolderUpload /> Create Folder
            </li>
            <hr></hr>
            <li
              onClick={handleImportFile}
              className="py-2 cursor-pointer hover:bg-gray-300 flex justify-center items-center gap-1 text-sm"
            >
              <input
                ref={inputRef}
                onChange={changeFile}
                type="file"
                id="file"
                style={{ display: "none" }}
              />
              <MdUploadFile /> Import File
            </li>
          </ul>
        )}
      </div>
      {showLoader && <Loader></Loader>}
    </>
  );
}
