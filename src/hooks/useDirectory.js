import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataDirectory } from "../services/getDirectory";
import useUser from "./useUser";

const useDirectory = () => {
  const {logOut} = useUser();
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
      } else if(data.status === 401){
        logOut();
      } else {
        navigate("/error");
      }
    });
  };

  return { directory, updateDataDirectory };
};

export default useDirectory;
