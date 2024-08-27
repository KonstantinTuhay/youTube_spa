import { useState } from "react";
import SearchSystem from "../../components/SearchSystem";
import ModalWindow from "../../components/ModalWindow";
import Box from "@mui/material/Box";

const MainPage = () => {
  const [open, setOpen] = useState(false);

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
          position: "absolute",
          top: "50%",
          left: "50%",
          marginRight: "-50%",
          transform: "translate(-50%,-50%)",
          lineHeight: "0px",
        }}
      >
        <SearchSystem open={open} setOpen={setOpen} style={style} />
      </Box>
    </>
  );
};

export default MainPage;
