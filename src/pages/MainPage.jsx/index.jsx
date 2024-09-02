import { useState } from "react";
import { useSelector } from "react-redux";
import SearchSystem from "../../components/SearchSystem";
import ModalWindow from "../../components/ModalWindow";
import Box from "@mui/material/Box";

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const dayNightTheme = useSelector((state) => state.switchDayNight);

  const style = {
    width: 900,
    textAlign: "center",
    variant: "h2",
    marginBottom: "50px",
  };

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: dayNightTheme ? "#FFFFFF" : "#808080",
        }}
      >
        <SearchSystem open={open} setOpen={setOpen} style={style} />
      </Box>
    </>
  );
};

export default MainPage;
