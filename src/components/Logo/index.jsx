import { NavLink } from "react-router-dom";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";

const Logo = () => {
  const dayNightTheme = useSelector((state) => state.switchDayNight);

  return (
    <>
      <NavLink to="/">
        <SiYoutubeshorts
          style={{ fontSize: "50px", color: dayNightTheme ? "black" : "white" }}
        />
      </NavLink>
    </>
  );
};

export default Logo;
