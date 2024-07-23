import { Link, Outlet } from "react-router-dom";
import Logo from "../Logo";

const Menu = () => {
  return (
    <>
      <nav>
        <Link to="/main">
          <Logo />
        </Link>
        <Link to="/main">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/registr">Log out</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Menu;
