import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editId } from "../../redux/slices/editIdSlice";
import { editPreText } from "../../redux/slices/editPreviousText";
import { remove } from "../../redux/slices/addFavorites";
import ModalWindow from "../ModalWindow";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { enterText } from "../../redux/slices/textSlice";
import styles from "./index.module.css";

const Favorites = () => {
  const dispatch = useDispatch();

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

  const handleEditId = (id, text) => {
    dispatch(editId(id));
    dispatch(editPreText(text));
    setOpen(true);
  };

  const removeFavorite = (id) => {
    dispatch(remove(id));
  };

  const navigate = useNavigate();

  const clickSearch = (text) => {
    dispatch(enterText(text));
    navigate("/list");
  };

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} />

      <div className={styles.container}>
        <h2>FAVORITES</h2>

        {favoriteMovie.length === 0 ? (
          ""
        ) : (
          <List sx={style}>
            {/* <List className={styles.list}> */}
            {favoriteMovie.map((videoName, index) => {
              // if (videoName.id === getEditId || getEditId !== null) {
              //   return (

              // );
              // } else
              if (index === favoriteMovie.length - 1) {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className={styles.oneFavoriteVideo}
                  >
                    <ListItem>
                      <ListItemText
                        primary={videoName.text}
                        onClick={() => clickSearch(videoName.text)}
                      />

                      <IconButton
                        aria-label="delete"
                        onClick={
                          // handleOpen
                          () => handleEditId(videoName.id, videoName.text)
                        }
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton aria-label="delete">
                        <DeleteIcon
                          onClick={() => removeFavorite(videoName.id)}
                        />
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
                      <ListItemText
                        primary={videoName.text}
                        onClick={() => clickSearch(videoName.text)}
                      />

                      <IconButton
                        aria-label="delete"
                        onClick={
                          // handleOpen
                          () => handleEditId(videoName.id, videoName.text)
                        }
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon
                          onClick={() => removeFavorite(videoName.id)}
                        />
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
