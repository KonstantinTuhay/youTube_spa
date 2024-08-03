import { Routes, Route, Navigate } from "react-router-dom";
import Authorization from "./pages/Authorization";
import Registr from "./pages/Registration";
import MainPage from "./pages/MainPage.jsx";
import PrivateRoute from "./components/PrivateRoute";
import Favorites from "./components/Favotites";
import Menu from "./components/Menu";
import ListMovies from "./components/ListMovies/index.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/registr" element={<Registr />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Menu />}>
            <Route path="main" element={<MainPage />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="list" element={<ListMovies />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="registr" />} />
      </Routes>
    </>
  );
}

export default App;
