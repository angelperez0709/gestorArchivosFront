import { useEffect, useContext,useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Context from "../context/UserContext";
import ButtonNew from "./ButtonNew/";
import getDirectory,{getDataDirectory} from "../services/getDirectory";
import Modal from "./Modal";

export default function Folders() {
  const actualUrl = useLocation().pathname.substring(1);
  const [showModal, setShowModal] = useState(false);
  const { token } = useContext(Context);
  const [directory, setDirectory] = useState({
    path: "",
    id: 0,
  });

 const openModal = () => {
    setShowModal(true);
  }
  const handleModalClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    getDirectory(actualUrl, token).then(data=>{
      console.log(data);
      setDirectory({
        path: data.path,
        id: data.id,
        namePath: data.namePath
      });
      //getDataDirectory(data.id, token);
    });
  }, [actualUrl,token]);
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-[1fr_7fr]">
        <div>
          <ButtonNew onButtonClick={openModal}></ButtonNew>
        </div>
        <div>{directory.path}</div>
      </div>
      {showModal && <Modal idDirectory={directory.id} onClose={handleModalClose}></Modal>}
    </>
  );
}
