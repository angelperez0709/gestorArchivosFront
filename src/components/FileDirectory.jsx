import ElementDirectory from "./ElementDirectory";
export default function FolderDirectory({ folder }) {
  return (
    <div>
      <ElementDirectory
        id={folder.id}
        name={folder.name}
        type="file"
      ></ElementDirectory>
    </div>
  );
}
