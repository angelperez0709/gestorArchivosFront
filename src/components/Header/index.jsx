import { useState } from "react";
import Searcher from "../Searcher";
import { FaUser } from "react-icons/fa";
import ListUser from "../ListUser";
import "./style.css";

function Header({ filterFolders, value,openModal }) {
  const [showListUser, setShowListUser] = useState(false);
  const filterFoldersName = (name) => {
    filterFolders(name);
  };
  const openModalUser = () => {
    openModal(true);
  };

  const handleClick = () => {
    setShowListUser((prev)=>{
      return !prev;
    });
  };

  return (
    <header className="overflow-hidden bg-gray-50 h-[--height-header] flex items-center justify-between realtive">
      <div className="h-full">
        <Searcher value={value} filter={filterFoldersName}></Searcher>
      </div>
      <div
        id="user"
        onClick={handleClick}
        className="border mr-10 p-2 bg-white border-gray-300 cursor-pointer hover:bg-gray-300 rounded-full w-fit relative"
      >
        <FaUser ></FaUser>
      </div>
      {showListUser && <ListUser openModalUser={openModalUser}></ListUser>}
    </header>
  );
}

export default Header;
