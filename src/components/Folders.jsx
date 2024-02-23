import { useEffect, useContext, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Context from "../context/UserContext";
import ButtonNew from "./ButtonNew/";
import Modal from "./Modal";
import ElementDirectory from "./ElementDirectory";
import FolderDirectory from "./FolderDirectory";
import useDirectory from "../hooks/useDirectory";
import downloadFile from "../services/downloadFile";
//import PathContext from "../context/PathContext";

export default function Folders() {
  const [showModal, setShowModal] = useState(false);
  const { token, location } = useContext(Context);
  const { directory, updateDataDirectory } = useDirectory();
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  const openModal = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    updateDataDirectory({ path: location, token });
    setFilter("");
  }, [location]);

  const updateData = () => {
    updateDataDirectory({ path: location, token });
  };

  const changeFolder = (folder) => {
    navigate(`/${folder}`);
  };

  const filterFoldersName = (name) => {
    setFilter(name);
  };

  const updateDirectory = () => {
    setShowModal(false);
    updateDataDirectory({ path: location, token });
  };

  const handleDownloadFile = (id) => {
    downloadFile(id, token);
  }


  return (
    <>
      <Header value={filter} filterFolders={filterFoldersName}></Header>
      <div className="grid grid-cols-[1fr_1.5fr] sm:grid-cols-[1fr_5fr] mg:grid-cols-[1fr_7fr]">
        <div>
          <ButtonNew
            updateData={updateData}
            token={token}
            id={directory.id}
            onButtonClick={openModal}
          ></ButtonNew>
        </div>
        <div className="p-5">
          <div className="mb-5 text-xl">{directory.path}</div>

          <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            {directory.path !== "home" && (
              <div>
                <FolderDirectory
                  key={directory.id + ".."}
                  changeFolder={changeFolder}
                  folder={{
                    id: directory.id,
                    name: "..",
                    namePath: directory.prevPath,
                  }}
                ></FolderDirectory>
              </div>
            )}
            {directory.folders.map(
              (folder) =>
                folder.name.toLowerCase().includes(filter.toLowerCase()) && (
                  <FolderDirectory
                    changeFolder={changeFolder}
                    updateData={updateData}
                    key={folder.id + folder.name}
                    folder={folder}
                  ></FolderDirectory>
                )
            )}
            {directory.files.map(
              (file) =>
                file.name.toLowerCase().includes(filter.toLowerCase()) && (
                  <div onClick={()=>{handleDownloadFile(file.id)}} key={"div"+file.id+file.name}>
                    <ElementDirectory
                      key={file.id + file.name}
                      id={file.id}
                      name={file.name}
                      handleUpdateData={updateData}
                    ></ElementDirectory>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          idDirectory={directory.id}
          updateDirectory={updateDirectory}
          onClose={handleModalClose}
        ></Modal>
      )}
    </>
  );
}
