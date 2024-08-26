import Logo from "../Logo";
import NavPages from "../NavPages";
import AccountSettings from "../AccountSettings";
import SwitchDayNight from "../SwitchDayNight";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

const Navigation = () => {
  return (
    <>
      <Typography sx={{ align: "left" }}>
        <Logo />
      </Typography>
      <Typography sx={{ display: "flex", flexGrow: 1, pl: 24 }}>
        <NavPages />
      </Typography>
      <SwitchDayNight />
      <Tooltip title="Account settings">
        <AccountSettings />
      </Tooltip>
    </>
  );
};

export default Navigation;
