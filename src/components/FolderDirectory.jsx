import { useContext } from "react";
import ElementDirectory from "./ElementDirectory";
import { useNavigate } from "react-router-dom";
import PathContext from "../context/PathContext";
export default function FolderDirectory({ folder,changeFolder }) {
  const { setActualUrl } = useContext(PathContext);
  const handleOpenFolder = () => {
    changeFolder(folder.namePath);
    //navigate(`/${folder.namePath}`);
  };
  return (
    <div onClick={handleOpenFolder}>
      <ElementDirectory
        id={folder.id}
        name={folder.name}
        type="folder"
      ></ElementDirectory>
    </div>
  );
}
