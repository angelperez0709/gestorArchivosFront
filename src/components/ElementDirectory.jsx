import { FaFolder,FaFile } from "react-icons/fa";
export default function ElementDirectory({ id, name,type}) {
   

  return (
    <div  className="flex justify-start gap-2 items-center bg-gray-100 p-2 rounded-lg cursor-pointer hover:bg-gray-200" key={id}>
        {type=="folder" ? <FaFolder  /> : <FaFile />}
      {name}
    </div>
  );
}
