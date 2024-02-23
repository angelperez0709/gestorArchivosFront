import ElementDirectory from "./ElementDirectory";
export default function FolderDirectory({ folder,changeFolder,updateData }) {
  const handleOpenFolder = () => {
    changeFolder(folder.namePath);
    //navigate(`/${folder.namePath}`);
  };
  const handleUpdateData = ()=>{
    updateData();
  }
  return (
    <div onClick={handleOpenFolder}>
      <ElementDirectory
        id={folder.id}
        name={folder.name}
        type="folder"
        handleUpdateData={handleUpdateData}
      ></ElementDirectory>
    </div>
  );
}
