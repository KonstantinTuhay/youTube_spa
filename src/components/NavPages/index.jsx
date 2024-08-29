import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const NavPages = () => {
  return (
    <>
      <Typography>
        <NavLink className={styles.link} to="/">
          Search
        </NavLink>
      </Typography>
      <Typography>
        <NavLink className={styles.link} to="/favorites">
          Favorites
        </NavLink>
      </Typography>
    </>
  );
};

export default NavPages;
