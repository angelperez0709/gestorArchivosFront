import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useUser from "../hooks/useUser";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const { isLogged, login, setToken } = useUser();
  function handleSubmit(event) {
    event.preventDefault();
  }
  const handleClickLogin = () => {
    login({ username, password }).then((data) => {
      if (data.ok) {
        console.log(data.data.token);
        sessionStorage.setItem("token", data.data.token);
        sessionStorage.setItem("username", data.data.username);
        setToken(data.data.token);
      } else {
        setShowError(true);
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
      <div className="border border-gray-200 p-10 rounded-md w-full lg:w-[40vw] xl:w-[30vw] xxl:w-[20vw] scale-90 sm:scale-100">
        <div className="text-center m-10">
          <h1 className="font-sans text-xl">Login</h1>
        </div>
        <div className="w-72 lg:w-auto">
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <input
              className="border focus-visible:border-cyan-400 border-gray-200 rounded-lg p-2 outline-none"
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
          {showError && (
            <small className="text-red-500 text-center">
              Username or password is incorrect
            </small>
          )}
        </div>
        <div className="flex justify-between items-center mt-10">
          <Link to="/register" className="text-cyan-500 underline">
            Register
          </Link>
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
