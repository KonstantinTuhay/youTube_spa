import { Routes, Route } from "react-router-dom";
import Authorization from "../pages/Authorization";
import Registr from "../pages/Registration";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/registr" element={<Authorization />} />
        <Route path="/registr" element={<Registr />} />
      </Routes>
    </>
  );
}

export default App;
