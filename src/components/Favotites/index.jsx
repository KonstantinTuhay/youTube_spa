import { useSelector } from "react-redux";
import styles from "./index.module.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

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
                      <p>21312313</p>
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
                      <p>21312313</p>
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
