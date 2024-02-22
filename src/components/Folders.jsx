import { useEffect, useContext, useState } from "react";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";
import Context from "../context/UserContext";
import ButtonNew from "./ButtonNew/";
import Modal from "./Modal";
import ElementDirectory from "./ElementDirectory";
import FolderDirectory from "./FolderDirectory";
import useDirectory from "../hooks/useDirectory";
//import PathContext from "../context/PathContext";

export default function Folders() {
  let location = useLocation().pathname.substring(1);
  const [showModal, setShowModal] = useState(false);
  const { token } = useContext(Context);
  const { directory, updateDataDirectory } = useDirectory();
  const navigate = useNavigate();
  const openModal = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    updateDataDirectory({ path: location, token });
  }, [location]);

  const updateData = () => {
    updateDataDirectory({ path:location, token });
  };

  const changeFolder = (folder) => {
    navigate(`/${folder}`);
  };

  const updateDirectory = () => {
    setShowModal(false);
    updateDataDirectory({ path: location, token });
  };

  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-[1fr_7fr]">
        <div>
          <ButtonNew
            updateData={updateData}
            token={token}
            id={directory.id}
            onButtonClick={openModal}
          ></ButtonNew>
        </div>
        <div className="p-5">
          <div className="mb-5">{directory.path}</div>

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
            {directory.folders.map((folder) => (
              <FolderDirectory
                changeFolder={changeFolder}
                key={folder.id + folder.name}
                folder={folder}
              ></FolderDirectory>
            ))}
            {directory.files.map((file) => (
              <ElementDirectory
                key={file.id + file.name}
                id={file.id}
                name={file.name}
              ></ElementDirectory>
            ))}
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
