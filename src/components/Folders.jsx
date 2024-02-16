import { useEffect, useContext, useState } from "react";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import Context from "../context/UserContext";
import ButtonNew from "./ButtonNew/";
import getDirectory from "../services/getDirectory";
import Modal from "./Modal";
import ElementDirectory from "./ElementDirectory";
import useUser from "../hooks/useUser";
import FolderDirectory from "./FolderDirectory";
import useDirectory from "../hooks/useDirectory";

export default function Folders({ folder }) {
  console.log(folder);
  const actualUrl = useLocation().pathname.substring(1);
  const [showModal, setShowModal] = useState(false);
  const { token } = useContext(Context);
  const { isLogged } = useUser();
  const { dataDirectory, updateDataDirectory } = useDirectory();
  const navigate = useNavigate();
  const [directory, setDirectory] = useState({
    path: "",
    id: 0,
  });

  const openModal = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    if (isLogged) {
      getDirectory(actualUrl, token).then((data) => {
        if (typeof data.error != "undefined") {
          navigate("/error");
        } else {
          setDirectory({
            ...data.data,
          });
        }
        updateDataDirectory({ id: data.data.id, token });
      });
    }
  }, [actualUrl]);
  console.log(dataDirectory);
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-[1fr_7fr]">
        <div>
          <ButtonNew
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
                  folder={{
                    id: directory.id,
                    name: "..",
                    namePath: dataDirectory.prevPath,
                  }}
                ></FolderDirectory>
              </div>
            )}
            {dataDirectory.folders.map((folder) => (
              <FolderDirectory
                key={folder.id + folder.name}
                folder={folder}
              ></FolderDirectory>
            ))}
            {dataDirectory.files.map((file) => (
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
        <Modal idDirectory={directory.id} onClose={handleModalClose}></Modal>
      )}
    </>
  );
}
