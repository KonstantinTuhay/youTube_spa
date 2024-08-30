import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  IconButton,
  Divider,
  ListItemIcon,
  MenuItem,
  Menu,
  Avatar,
} from "@mui/material";
import { Settings, Logout } from "@mui/icons-material";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

const AccountSettings = () => {
  const dayNightTheme = useSelector((state) => state.switchDayNight);

  return (
    <>
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
      {/* <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar
          sx={{
            width: 32,
            height: 32,
            backgroundColor: dayNightTheme ? "#000000" : "#ffffff",
            color: dayNightTheme ? "#ffffff" : "#000000",
          }}
        >
          M
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <NavLink to="/registr">Log out</NavLink>
        </MenuItem>
      </Menu> */}
    </>
  );
};

export default AccountSettings;
