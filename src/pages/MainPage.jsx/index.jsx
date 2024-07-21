import { Link, NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <img src="../../../public/monitor26.png" width="60px" alt="logo" />
      <NavLink>Search</NavLink>
      <NavLink>Favorites</NavLink>
      <Link></Link>
    </>
  );
};

export default MainPage;
