import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ListItemIcon, Stack } from "@mui/material";
import { Logout } from "@mui/icons-material";

const GoOut = () => {
  const dayNightTheme = useSelector((state) => state.switchDayNight);

  return (
    <Stack
      sx={{
        width: 32,
        height: 32,
        display: "flex",
        textAlign: "right",
        justifyContent: "center",
        border: "0px solid",
        borderRadius: "50%",
        backgroundColor: dayNightTheme ? "#000000" : "#ffffff",
      }}
    >
      <ListItemIcon>
        <NavLink to="/registr">
          <Logout
            sx={{
              color: dayNightTheme ? "#ffffff" : "#000000",
              mt: "3px",
              ml: "6px",
            }}
          />
        </NavLink>
      </ListItemIcon>
    </Stack>
  );
};

export default GoOut;
