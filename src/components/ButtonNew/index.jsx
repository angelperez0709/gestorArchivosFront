import "./style.css";
import { useState } from "react";
import { MdOutlineDriveFolderUpload, MdUploadFile } from "react-icons/md";
export default function ButtonNew({onButtonClick}) {
    const [showOptions, setShowOptions] = useState(false);

    const handleCreateFolder = () => {
        onButtonClick();
    };

    const handleButtonClick = () => {
        setShowOptions(!showOptions);
    };

  const handleImportFile = () => {
    // Logic to import a file
  };


  return (
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
            <MdUploadFile /> Import File
          </li>
        </ul>
      )}
    </div>
  );
}
