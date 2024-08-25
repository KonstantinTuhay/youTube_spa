import { useState } from "react";
import { useSelector } from "react-redux";
import ListItemInFavorites from "../ListItemInFavorites";
import ModalWindow from "../ModalWindow";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import styles from "./index.module.css";

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

      <div className={styles.container}>
        <h2>FAVORITES</h2>

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
      </div>
    </>
  );
};

export default Favorites;
