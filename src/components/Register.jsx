import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import registerUser from "../services/registerUser";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    showError: false,
    message: "",
  });
  const { isLogged } = useUser();
  function handleSubmit(event) {
    event.preventDefault();
  }
  const handleClickRegister = () => {
    registerUser({ username, password }).then((data) => {
        if (data.status == 200) {
            navigate("/");
      }else{
        setError({
            showError: true,
            message: data.message,
            
        });
      }
    });
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  return (
    <section className="grid place-content-center overflow-hidden w-full h-[100vh] bg-white">
      <div className="border border-gray-200 p-10 rounded-md w-full lg:w-[40vw] xl:w-[30vw] xxl:w-[20vw]">
        <div className="text-center m-10">
          <h1 className="font-sans text-xl">Register</h1>
        </div>
        <div>
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <input
              className={`border focus-visible:border-cyan-400 border-gray-200 rounded-lg p-2 outline-none ${error.showError ? "border-red-400" : ""} `}
              type="text"
              value={username}
              name="username"
              placeholder="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
            <input
              className={`outline-none focus-visible:border-cyan-400 border border-gray-200 rounded-lg p-2 ${error.showError ? "border-red-400" : ""}`}
              type="password"
              value={password}
              name="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            {
                error.showError && <p className="text-red-400">{error.message}</p>
            }
          </form>
        </div>
        <div className="flex justify-between items-center mt-10">
            <Link to="/login" className="text-cyan-500 underline">Login</Link>
          <button
            onClick={handleClickRegister}
            className="bg-cyan-400 p-2 rounded-md text-white"
          >
            Create user
          </button>
        </div>
      </div>
    </section>
  );
}
