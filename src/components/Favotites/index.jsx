import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { remove } from "../../redux/slices/addFavorites";

const Favorites = () => {
  const dispatch = useDispatch();

  const style = {
    py: 0,
    width: "100%",
    // maxWidth: 360,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };

  const favoriteMovie = useSelector((state) => state.addFavorites);
  console.log(favoriteMovie);

  const removeFavorite = (id) => {
    dispatch(remove(id));
  };
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
                      <ListItemText primary={videoName.text} />
                      <IconButton aria-label="delete">
                        {/* <EditIcon onClick={()=>} /> */}
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
                      <ListItemText primary={videoName.text} />
                      <IconButton aria-label="delete">
                        {/* <EditIcon onClick={() => } /> */}
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
