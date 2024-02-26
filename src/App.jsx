import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Folders from "./components/Folders";
import Login from "./components/Login";
import { PathContextProvider } from "./context/PathContext";
import Register from "./components/Register";
import useUser from "./hooks/useUser";
function App() {
  const navigate = useNavigate();
  const { isLogged } = useUser();
  useEffect(() => {
    if (
      !isLogged &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/login"
    ) {
      navigate("/login");
    }
  }, [isLogged]);
  return (
    <PathContextProvider>
      <Routes>
        <Route path="/*" element={<Folders></Folders>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/error" element={<div>Error</div>}></Route>
      </Routes>
    </PathContextProvider>
  );
}

export default App;
