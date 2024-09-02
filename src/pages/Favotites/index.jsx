import { useState } from "react";
import { useSelector } from "react-redux";
import ListItemInFavorites from "../../components/ListItemInFavorites";
import ModalWindow from "../../components/ModalWindow";
import { List, Divider, Box, Typography } from "@mui/material";
import ContentPasteOffIcon from "@mui/icons-material/ContentPasteOff";

const Favorites = () => {
  const [open, setOpen] = useState(false);

  const favoriteMovie = useSelector((state) => state.addEditRemoveFavorites);

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} />

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" sx={{ mt: 15, ml: 3 }}>
          Favorites
        </Typography>

        {(favoriteMovie.length && (
          <List
            sx={{
              py: 0,
              width: "100%",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
            }}
          >
            {favoriteMovie.map((videoName, index) => {
              return (
                <Box key={crypto.randomUUID()}>
                  <ListItemInFavorites
                    videoName={videoName}
                    setOpen={setOpen}
                  />
                  {index !== favoriteMovie.length - 1 && (
                    <Divider variant="middle" component="li" />
                  )}
                </Box>
              );
            })}
          </List>
        )) || (
          <Box sx={{ textAlign: "center" }}>
            <ContentPasteOffIcon sx={{ fontSize: "80px" }} />
            <Typography variant="h4">Not Found</Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Favorites;
