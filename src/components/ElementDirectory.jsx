import { FaFolder, FaFile } from "react-icons/fa";
import DropDown from "./DropDown";
import Tooltip from "./Tooltip";
export default function ElementDirectory({ id, name, type, handleUpdateData }) {
  const updateData = () => {
    handleUpdateData();
  };

  return (
    <>
      <Tooltip content={name}>
        <div
          className="flex justify-start gap-2 items-center bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200"
          key={id}
        >
          <div> {type == "folder" ? <FaFolder className={`${name == '..' ? "mt-[6px]" : ""}`} /> : <FaFile />}</div>
          <span className={`${name == '..' ? "mt-[6px]" : ""} overflow-hidden text-ellipsis whitespace-nowrap`}>
            {name}
          </span>
          {name != ".." && (
            <DropDown updateData={updateData} id={id} type={type}></DropDown>
          )}
        </div>
      </Tooltip>
    </>
  );
}
