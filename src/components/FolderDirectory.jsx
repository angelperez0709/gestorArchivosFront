import ElementDirectory from "./ElementDirectory";
import { useNavigate } from "react-router-dom";
export default function FolderDirectory({ folder }) {
  console.log(folder);
  const navigate = useNavigate();
  const handleOpenFolder = () => {
    navigate(`/${folder.namePath}`);
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
