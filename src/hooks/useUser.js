import { useCallback, useContext } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";
export default function useUser() {
  const { token, setToken } = useContext(Context);
  const login = useCallback(({ username, password }) => {
    loginService({ username, password }).then((data) => {
      if (data.ok) {
        sessionStorage.setItem("token", data.data);
        setToken(data.data);
      }
    });
  }, [setToken]);

  const logOut = useCallback(() => {
    setToken("");
    localStorage.removeItem("token");
  });

  return {
    isLogged: Boolean(token),
    login,
  };
}
