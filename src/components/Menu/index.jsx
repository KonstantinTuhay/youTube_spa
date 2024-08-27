import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "../Navigation";
import { AppBar, Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import styles from "./index.module.css";

const Menu = () => {
  const { Sider, Content } = Layout;

  return (
    <>
      <AppBar
        position="static"
        sx={{
          height: 80,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#6AADE9",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Navigation />
          </Toolbar>
        </Container>
      </AppBar>

      <Sider width="25%" className={styles.siderStyle} />
      <Content className={styles.contentStyle}>
        <Outlet />
      </Content>
      <Sider width="25%" className={styles.siderStyle} />
    </>
  );
};

export default Menu;
