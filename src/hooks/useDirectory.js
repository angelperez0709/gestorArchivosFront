import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataDirectory } from "../services/getDirectory";

const useDirectory = () => {
  const [directory, setDirectory] = useState({
    path: "",
    id: 0,
    folders: [],
    files: [],
    prevPath: "",
  });
  const navigate = useNavigate();

  const updateDataDirectory = ({ path, token }) => {
    getDataDirectory(path, token).then((data) => {
      if (data.status === 200) {
        setDirectory({
          path: data.path,
          id: data.id,
          folders: data.directories,
          files: data.files,
          prevPath: data.prevPath,
        });
      } else {
        navigate("/error");
      }
    });
  };

  return { directory, updateDataDirectory };
};

export default useDirectory;
