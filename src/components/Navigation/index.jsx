import Logo from "../Logo";
import NavPages from "../NavPages";
import GoOut from "../GoOut";
import SwitchDayNight from "../SwitchDayNight";
import { Box, Typography, Tooltip } from "@mui/material";

const Navigation = () => {
  return (
    <>
      <Typography sx={{ align: "left" }}>
        <Logo />
      </Typography>
      <Typography sx={{ display: "flex", flexGrow: 1, pl: 24 }}>
        <NavPages />
      </Typography>

      <Box sx={{ display: "flex" }}>
        <SwitchDayNight />
        <Tooltip title="Account settings">
          <GoOut />
        </Tooltip>
      </Box>
    </>
  );
};

export default Navigation;
