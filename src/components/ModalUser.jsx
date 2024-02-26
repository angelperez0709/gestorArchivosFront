import { useEffect, useRef, useContext, useState } from "react";
import Context from "../context/UserContext";
import { gsap } from "gsap";
import { changeDataUser } from "../services/login";

export default function ModalUser({ onClose }) {
  const [error, setError] = useState({
    show: false,
    message: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState({
    newPassword: "",
    repeatedPassword: "",
  });
  const { token } = useContext(Context);
  const element = useRef();
  let tweenRef = useRef();
  useEffect(() => {
    tweenRef.current = gsap.to(element.current, { duration: 0.9, opacity: 1 });
  }, []);
  const handleClose = () => {
    tweenRef.current.reverse();
    tweenRef.current.eventCallback("onReverseComplete", () => onClose(true));
  };

  const handleClickCreate = () => {
    let { newPassword, repeatedPassword } = password;
    if(username == "" && newPassword == "" && repeatedPassword == ""){
      setError({
        show: true,
        message: "At least one field is required, username or password",
      });
      return;
    }
    changeDataUser({ username, newPassword, repeatedPassword, token }).then(
      (data) => {
        if (data.ok) {
          setSuccess(true);
        } else {
          setError({
            show: true,
            message: data.error,
          });
        }
      }
    );
  };
useEffect(() => {

  if (success) {
    setTimeout(() => {
      handleClose();
    }, 1000);
  }
}, [success]);

useEffect(() => {
  if (error.show) {
    setSuccess(false);
  }
}, [error]);

  const handleChangeData = (e) => {
    if (e.key === "Enter") {
      handleClickCreate();
    }
  };

  return (
    <div
      ref={element}
      className="opacity-0 fixed grid place-content-center w-full h-full z-20 top-0 left-0 overflow-hidden backdrop-brightness-90"
    >
      <div className="bg-white rounded-lg p-5 flex flex-col gap-4">
        <div>
          <h2 className="text-2xl">Change user data</h2>
        </div>
        <div className="flex flex-col gap-2 w-[70vw] sm:w-96">
          <input
            onKeyUp={handleChangeData}
            value={username}
            type="text"
            className="outline-none focus-visible:border-blue-400 w-full p-2 border-2 border-gray-300 rounded-md"
            placeholder="Username"
            onChange={({ target }) => {
              setUsername(target.value);
            }}
          ></input>
          {showPassword ? (
            <>
              <input
                onKeyUp={handleChangeData}
                type="password"
                className="outline-none focus-visible:border-blue-400 w-full p-2 border-2 border-gray-300 rounded-md"
                placeholder="Password"
                onChange={({ target }) => {
                  setPassword((prev) => {
                    return { ...prev, newPassword: target.value };
                  });
                }}
              ></input>
              <input
                onKeyUp={handleChangeData}
                type="password"
                className="outline-none focus-visible:border-blue-400 w-full p-2 border-2 border-gray-300 rounded-md"
                placeholder="Repeat password"
                onChange={({ target }) => {
                  setPassword((prev) => {
                    return { ...prev, repeatedPassword: target.value };
                  });
                }}
              ></input>
              <button
                onClick={() => setShowPassword(false)}
                className="text-blue-500"
              >
                hide password
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowPassword(true)}
              className="text-blue-500"
            >
              Change password
            </button>
          )}
          {error.show && !success && (
            <small className="text-red-500">{error.message}</small>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div>
            {success && (
              <small className="text-green-500">
                User data changed successfully
              </small>
            )}
          </div>
          <div className="text-right flex justify-end gap-1">
            <button
              onClick={handleClickCreate}
              className="text-blue-500 p-2 rounded-md"
            >
              Change
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
    </div>
  );
}
