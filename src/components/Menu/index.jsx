import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import { AppBar, Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";

const Menu = () => {
  const dayNightTheme = useSelector((state) => state.switchDayNight);

  return (
    <>
      <AppBar
        // position="static"
        sx={{
          height: 80,
          display: "flex",
          justifyContent: "center",
          backgroundColor: dayNightTheme ? "#6AADE9" : "black",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Navigation />
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          display: "block",
          // height: "100vh",
          backgroundColor: dayNightTheme ? "white" : "gray",
          color: dayNightTheme ? "black" : "white",
        }}
      >
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default Menu;
