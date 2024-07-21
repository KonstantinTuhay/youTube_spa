import { Routes, Route, Navigate } from "react-router-dom";
import Authorization from "./pages/Authorization";
import Registr from "./pages/Registration";
import MainPage from "./pages/MainPage.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/registr" element={<Registr />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Navigate to="registr" />} />
      </Routes>
    </>
  );
}

export default App;
