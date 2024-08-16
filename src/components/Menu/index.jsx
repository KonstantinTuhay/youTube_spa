import { NavLink, Outlet } from "react-router-dom";
import { Flex, Layout } from "antd";
import MainPage from "../../pages/MainPage.jsx";

import styles from "./index.module.css";

const Menu = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle = {
    // textAlign: "center",
    height: 85,

    paddingInline: 0,
    lineHeight: "64px",
    backgroundColor: "white",
  };
  const contentStyle = {
    textAlign: "center",
    // minHeight: "100vh",
    lineHeight: "120px",
    color: "#433ac2",
    backgroundColor: "#ffffff",
  };
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#ffffff",
  };
  const layoutStyle = {
    overflow: "hidden",
  };
  return (
    <>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <NavLink to="/main">
                <img
                  src="../../../public/monitor26.png"
                  width="60px"
                  alt="logo"
                />
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
        </Header>
        <Layout>
          <Sider width="25%" style={siderStyle} />
          <Content style={contentStyle}>
            <Outlet className={styles.data_page} />
          </Content>
          <Sider width="25%" style={siderStyle} />
        </Layout>
      </Layout>
    </>
  );
};

export default Menu;
