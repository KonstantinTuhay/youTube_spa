import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import styles from "./index.module.css";

const ShowMovie = ({ movie }) => {
  const isSwitch = useSelector((state) => state.switchCards);

  const style = {
    width: "100%",
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };

  console.log(movie);
  return (
    <>
      <div>
        {isSwitch ? (
          <Card className={styles.cubes}>
            <Link
              to={`https://www.youtube.com/watch?v=${movie.id.videoId}`}
              target="_blank"
            >
              <CardActionArea className={styles.cardGrid}>
                <CardMedia
                  component="img"
                  height="165"
                  image={movie.snippet.thumbnails.high.url}
                  alt="Image Movie"
                />
                <CardContent className={styles.cardContentGrid}>
                  <Typography gutterBottom className={styles.title}>
                    {movie.snippet.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {movie.snippet.channelTitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ) : (
          <List sx={style} className={styles.list}>
            <Link
              to={`https://www.youtube.com/watch?v=${movie.id.videoId}`}
              target="_blank"
            >
              <ListItem>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      className={styles.img}
                      image={movie.snippet.thumbnails.high.url}
                      alt="Image Movie"
                    />
                  </CardActionArea>
                </Card>

                <div className={styles.cardFlex}>
                  <ListItemText primary={movie.snippet.title} />
                  <ListItemText primary={movie.snippet.channelTitle} />
                </div>
              </ListItem>
            </Link>
          </List>
        )}
      </div>
    </>
  );
};

export default ShowMovie;
