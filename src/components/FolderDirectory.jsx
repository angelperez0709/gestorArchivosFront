import ElementDirectory from "./ElementDirectory";
export default function FolderDirectory({ folder,changeFolder }) {
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
