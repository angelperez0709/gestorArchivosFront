import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataDirectory } from "../services/getDirectory";

const useDirectory = () => {
  const [dataDirectory, setDataDirectory] = useState({
    folders: [],
    files: [],
    prevPath: "",
  });
  const navigate = useNavigate();

  const updateDataDirectory = ({ id, token }) => {
    getDataDirectory(id, token).then((data) => {
      if (data.status === 200) {
        setDataDirectory({
          folders: data.directories,
          files: data.files,
          prevPath: data.prevPath,
        });
      } else {
        navigate("/error");
      }
    });
  };

  return { dataDirectory, updateDataDirectory };
};

export default useDirectory;
