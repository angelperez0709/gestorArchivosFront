import { useEffect, useRef, useContext } from "react";
import Context from "../context/UserContext";
import { gsap } from "gsap";
import createFolder from "../services/createFolder";
const Modal = ({ idDirectory, onClose }) => {
  const { token } = useContext(Context);
  const element = useRef();
  const name = useRef();
  let tweenRef = useRef();
  useEffect(() => {
    tweenRef.current = gsap.to(element.current, { duration: 0.9, opacity: 1 });
  }, []);
  const handleClose = () => {
    tweenRef.current.reverse();
    tweenRef.current.eventCallback("onReverseComplete", () => onClose());
  };
  const handleCreateFolder = () => {
    createFolder(idDirectory, name.current.value,token);
  };

  return (
    <div
      ref={element}
      className="opacity-0 fixed grid place-content-center w-full h-full z-20 top-0 left-0 overflow-hidden backdrop-brightness-90"
    >
      <div className="bg-white w-80 rounded-lg p-5 flex flex-col gap-4">
        <div>
          <h2 className="text-2xl">New Folder</h2>
        </div>
        <div>
          <input
            ref={name}
            type="text"
            className="outline-none focus-visible:border-blue-400 w-full p-2 border-2 border-gray-300 rounded-md"
            placeholder="Folder Name"
          ></input>
        </div>
        <div className="text-right flex justify-end gap-1">
          <button
            onClick={handleCreateFolder}
            className="text-blue-500 p-2 rounded-md"
          >
            Create
          </button>
          <button
            onClick={handleClose}
            className="text-blue-500 p-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
