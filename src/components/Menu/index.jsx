import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.css";

const Menu = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <NavLink to="/main">
            <img src="../../../public/monitor26.png" width="60px" alt="logo" />
          </NavLink>
        </div>
        <div className={styles.pages}>
          <NavLink className={styles.link} to="/main">
            Search
          </NavLink>
          <NavLink className={styles.link} to="/favorites">
            Favorites
          </NavLink>
        </div>
        <div>
          <NavLink className={styles.link} to="/registr">
            Log out
          </NavLink>
        </div>
      </nav>
      <Outlet className={styles.data_page} />
    </>
  );
};

export default Menu;
