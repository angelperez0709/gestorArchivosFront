import { FaFolder, FaFile } from "react-icons/fa";
import DropDown from "./DropDown";
import Tooltip from "./Tooltip";
export default function ElementDirectory({ id, name, type }) {
  return (
    <>
      <Tooltip content={name}>
        <div
          className="flex justify-start gap-2 items-center bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200"
          key={id}
        >
          <div> {type == "folder" ? <FaFolder /> : <FaFile />}</div>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {name}
          </span>
          {name != ".." && type == "folder" && <DropDown></DropDown>}
        </div>
      </Tooltip>
    </>
  );
}
