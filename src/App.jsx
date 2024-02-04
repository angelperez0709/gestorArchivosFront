import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Folders from "./components/Folders";
import Login from "./components/Login";
import useUser from "./hooks/useUser";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
  const { isLogged } = useUser();
  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/*" element={<Folders></Folders>}></Route>
    </Routes>
  );
}

export default App;
