import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import { AppBar, Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const Menu = () => {
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

      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default Menu;
