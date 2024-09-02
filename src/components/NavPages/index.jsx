import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import styles from "./index.module.css";

const NavPages = () => {
  const dayNightTheme = useSelector((state) => state.switchDayNight);

  return (
    <>
      <Typography>
        <NavLink
          className={dayNightTheme ? styles.linkDay : styles.linkNight}
          to="/list"
        >
          Search
        </NavLink>
      </Typography>
      <Typography>
        <NavLink
          className={dayNightTheme ? styles.linkDay : styles.linkNight}
          to="/favorites"
        >
          Favorites
        </NavLink>
      </Typography>
    </>
  );
};

export default NavPages;
