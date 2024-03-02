import { useContext } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";
export default function useUser() {
  const { token, setToken } = useContext(Context);
  // const login = useCallback(
  //   ({ username, password }) => {
  //     loginService({ username, password }).then((data) => {
  //       if (data.ok) {
  //         sessionStorage.setItem("token", data.data);
  //         setToken(data.data);
  //       }
  //     });
  //   },
  //   [setToken]
  // );

  function login({ username, password }) {
    const response = loginService({ username, password }).then((data) => {
      return data;
    });
    return response;
  }

  const logOut = () => {
    setToken("");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
  };

  return {
    isLogged: Boolean(token),
    login,
    logOut,
    token,
    setToken
  };
}
