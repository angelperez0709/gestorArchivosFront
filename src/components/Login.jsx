import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLogged, login } = useUser();
  function handleSubmit(event) {
    event.preventDefault();
  }
  const handleClickLogin = () => {
    login({ username, password });
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);
  return (
    <section className="grid place-content-center overflow-hidden w-full h-[100vh] bg-white">
      <div className="border border-gray-200 p-10 rounded-md w-[20vw]">
        <div className="text-center m-10">
          <h1 className="font-sans text-xl">Login</h1>
        </div>
        <div>
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <input
              className="border focus-visible:border-cyan-400 border-gray-200 rounded-lg p-2 outline-none "
              type="text"
              value={username}
              name="username"
              placeholder="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
            <input
              className="outline-none focus-visible:border-cyan-400 border border-gray-200 rounded-lg p-2"
              type="password"
              value={password}
              name="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </form>
        </div>
        <div className="flex justify-between mt-10">
          <button className="text-cyan-500 underline">Register</button>
          <button
            onClick={handleClickLogin}
            className="bg-cyan-400 p-2 rounded-md text-white"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
