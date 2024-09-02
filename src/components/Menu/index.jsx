import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Container, Toolbar, Box } from "@mui/material";

const Menu = () => {
  const dayNightTheme = useSelector((state) => state.switchDayNight);

  return (
    <>
      <AppBar
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
