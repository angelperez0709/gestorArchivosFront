import { useEffect, useContext, useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Context from "../context/UserContext";
import ButtonNew from "./ButtonNew/";
import getDirectory, { getDataDirectory } from "../services/getDirectory";
import Modal from "./Modal";

export default function Folders() {
  const actualUrl = useLocation().pathname.substring(1);
  const [showModal, setShowModal] = useState(false);
  const { token } = useContext(Context);
  const [directory, setDirectory] = useState({
    path: "",
    id: 0,
  });
  const [dataDirectory, setDataDirectory] = useState({
    folders: [],
    files: [],
  }
  );

  const openModal = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    getDirectory(actualUrl, token).then((data) => {
      setDirectory({
        path: data.path,
        id: data.id,
      });
      getDataDirectory(data.id, token).then((data) => {
        if(data.status === 200){ 
          setDataDirectory({
          folders: data.directories,
          files: data.files,
        });
      }
       });
      });
  }, [actualUrl, token]);
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-[1fr_7fr]">
        <div>
          <ButtonNew onButtonClick={openModal}></ButtonNew>
        </div>
        <div>
          {directory.path}
          <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            {dataDirectory.folders.map((folder) => (
              <div className="bg-gray-100 p-2 rounded-lg" key={folder.id}>{folder.name}</div>
            ))}
            {dataDirectory.folders.map((folder) => (
              <div className="bg-gray-100 p-2 rounded-lg" key={folder.id}>{folder.name}</div>
            ))}
            {dataDirectory.folders.map((folder) => (
              <div className="bg-gray-100 p-2 rounded-lg" key={folder.id}>{folder.name}</div>
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <Modal idDirectory={directory.id} onClose={handleModalClose}></Modal>
      )}
    </>
  );
}
