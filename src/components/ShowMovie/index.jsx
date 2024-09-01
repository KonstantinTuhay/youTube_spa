import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import styles from "./index.module.css";

const ShowMovie = ({ movie }) => {
  const isSwitch = useSelector((state) => state.switchCards);
  const dayNightTheme = useSelector((state) => state.switchDayNight);

  const linkOnYouTube = import.meta.env.VITE_LINK_ON_YOUTUBE + movie.id.videoId;

  return (
    <>
      <Box>
        {isSwitch ? (
          <Card>
            <Link to={linkOnYouTube} target="_blank" className={styles.link}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="165"
                  image={movie.snippet.thumbnails.high.url}
                  alt="Image Movie"
                />
                <CardContent
                  sx={{
                    minHeight: "80px",
                    minWidth: "300px",
                    backgroundColor: dayNightTheme ? "white" : "#606060",
                  }}
                >
                  <Typography
                    className={styles.typography}
                    gutterBottom
                    sx={{
                      color: dayNightTheme ? "black" : "white",
                    }}
                  >
                    {movie.snippet.title}
                  </Typography>
                  <Typography
                    className={styles.typographyChanel}
                    color="text.secondary"
                    sx={{
                      color: dayNightTheme ? "rgba(0, 0, 0, 0.51)" : "white",
                    }}
                  >
                    {movie.snippet.channelTitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ) : (
          <List
            sx={{
              width: "100%",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              padding: 0,
              backgroundColor: dayNightTheme ? "background.paper" : "#606060",
            }}
          >
            <Link to={linkOnYouTube} target="_blank" className={styles.link}>
              <ListItem
                sx={{
                  padding: 0,
                  border: "0px",
                }}
              >
                <Card>
                  <CardActionArea>
                    <CardMedia
                      sx={{
                        height: "140px",
                        color: dayNightTheme ? "black" : "white",
                      }}
                      component="img"
                      image={movie.snippet.thumbnails.high.url}
                      alt="Image Movie"
                    />
                  </CardActionArea>
                </Card>

                <Box
                  sx={{
                    marginLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    color: "black",
                  }}
                >
                  <ListItemText
                    sx={{
                      color: dayNightTheme ? "black" : "white",
                    }}
                    primary={movie.snippet.title}
                  />
                  <ListItemText
                    sx={{
                      color: dayNightTheme ? "black" : "white",
                    }}
                    primary={movie.snippet.channelTitle}
                  />
                </Box>
              </ListItem>
            </Link>
          </List>
        )}
      </Box>
    </>
  );
};

export default ShowMovie;
