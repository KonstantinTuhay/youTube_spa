import { useState } from "react";
import { useSelector } from "react-redux";
import ListItemInFavorites from "../../components/ListItemInFavorites";
import ModalWindow from "../../components/ModalWindow";
import { List, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContentPasteOffIcon from "@mui/icons-material/ContentPasteOff";

const Favorites = () => {
  const [open, setOpen] = useState(false);

  const favoriteMovie = useSelector((state) => state.addEditRemoveFavorites);
  console.log(favoriteMovie);
  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} />

      <Box sx={{ pt: "30px", ml: "30px" }}>
        <Typography variant="h3" gutterBottom>
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
