import { useState } from "react";
import { useSelector } from "react-redux";
import ListItemInFavorites from "../ListItemInFavorites";
import ModalWindow from "../ModalWindow";
import { List, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Favorites = () => {
  const style = {
    py: 0,
    width: "100%",
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };

  const [open, setOpen] = useState(false);

  const favoriteMovie = useSelector((state) => state.addFavorites);

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} />

      <Box sx={{ mt: "30px", ml: "30px" }}>
        <Typography variant="h3" gutterBottom>
          FAVORITES
        </Typography>

        {favoriteMovie.length === 0 ? (
          ""
        ) : (
          <List sx={style}>
            {favoriteMovie.map((videoName, index) => {
              if (index === favoriteMovie.length - 1) {
                return (
                  <div key={crypto.randomUUID()}>
                    <ListItemInFavorites
                      videoName={videoName}
                      setOpen={setOpen}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={crypto.randomUUID()}>
                    <ListItemInFavorites
                      videoName={videoName}
                      setOpen={setOpen}
                    />
                    <Divider variant="middle" component="li" />
                  </div>
                );
              }
            })}
          </List>
        )}
      </Box>
    </>
  );
};

export default Favorites;
