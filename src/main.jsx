import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./context/UserContext";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <UserContextProvider>
      <App />
      </UserContextProvider>
  </BrowserRouter>
);
