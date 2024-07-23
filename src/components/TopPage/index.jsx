import Logo from "../Logo";
import Search from "../Search";
import Favorites from "../Favotites";
import LogOut from "../LogOut";
import { Outlet } from "react-router-dom";

const TopPage = () => {
  return (
    <>
      <Logo />
      <Search />
      <Favorites />
      <LogOut />
      <Outlet />
    </>
  );
};

export default TopPage;
