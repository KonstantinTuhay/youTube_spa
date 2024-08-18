import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Favorites = () => {
  const style = {
    py: 0,
    width: "100%",
    // maxWidth: 360,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };

  const styleForModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const favoriteMovie = useSelector((state) => state.addFavorites);
  console.log(favoriteMovie);
  return (
    <>
      <div className={styles.container}>
        <h2>FAVORITES</h2>

        {favoriteMovie.length === 0 ? (
          ""
        ) : (
          <List sx={style}>
            {favoriteMovie.map((videoName, index) => {
              if (index === favoriteMovie.length - 1) {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className={styles.oneFavoriteVideo}
                  >
                    <ListItem>
                      <ListItemText primary={videoName} />
                      <IconButton aria-label="delete" onClick={handleOpenModal}>
                        <EditIcon />
                      </IconButton>
                      <Modal
                        open={open}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={styleForModal}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Text in a modal
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            Duis mollis, est non commodo luctus, nisi erat
                            porttitor ligula.
                          </Typography>
                        </Box>
                      </Modal>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                  </div>
                );
              } else {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className={styles.oneFavoriteVideo}
                  >
                    <ListItem>
                      <ListItemText primary={videoName} />
                      <IconButton aria-label="delete" onClick={handleOpenModal}>
                        <EditIcon />
                      </IconButton>
                      <Modal
                        open={open}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={styleForModal}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Text in a modal
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            Duis mollis, est non commodo luctus, nisi erat
                            porttitor ligula.
                          </Typography>
                        </Box>
                      </Modal>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                    <Divider variant="middle" component="li" />
                  </div>
                );
              }
            })}
          </List>
        )}
      </div>
    </>
  );
};

export default Favorites;
