import { NavLink } from "react-router-dom";
import { SiYoutubeshorts } from "react-icons/si";

const Logo = () => {
  return (
    <>
      <NavLink to="/main">
        <SiYoutubeshorts style={{ fontSize: "50px", color: "black" }} />
      </NavLink>
    </>
  );
};

export default Logo;
