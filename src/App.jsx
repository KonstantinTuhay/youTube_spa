import { Routes, Route } from "react-router-dom";
import Authorization from "";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/registr" element={<Authorization />} />
      </Routes>
    </>
  );
}

export default App;
