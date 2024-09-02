import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShowView from "../ShowView";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  List,
  ListItem,
  ListItemText,
  Box,
  CircularProgress,
} from "@mui/material";
import { useGetViewCountQuery } from "../../redux/apiMovies";
import styles from "./index.module.css";

const ShowMovie = ({ movie }) => {
  const {
    data: views,
    error,
    isLoading,
  } = useGetViewCountQuery([`${movie.id.videoId}`]);

  const isSwitch = useSelector((state) => state.switchCards);
  const dayNightTheme = useSelector((state) => state.switchDayNight);

  const linkOnYouTube = import.meta.env.VITE_LINK_ON_YOUTUBE + movie.id.videoId;

  if (isLoading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
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
                  maxHeight: "100px",
                  maxWidth: "350px",
                  backgroundColor: dayNightTheme ? "white" : "#606060",
                }}
              >
                <Typography
                  className={styles.typography}
                  gutterBottom
                  sx={{
                    minHeight: "50px",
                    color: dayNightTheme ? "black" : "white",
                  }}
                >
                  {movie.snippet.title}
                </Typography>
                <Typography
                  className={styles.typographyChanel}
                  color="text.secondary"
                  sx={{
                    minHeight: "20px",
                    color: dayNightTheme ? "rgb(0, 0, 0)" : "white",
                  }}
                >
                  {movie.snippet.channelTitle}
                </Typography>
                <Typography
                  className={styles.typographyChanel}
                  color="text.secondary"
                  sx={{
                    minHeight: "20px",
                    color: dayNightTheme ? "rgba(0, 0, 0, 0.5)" : "white",
                  }}
                >
                  {views.map((view) => {
                    return <ShowView key={view.id} view={view} />;
                  })}
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
                <ListItemText
                  sx={{
                    color: dayNightTheme ? "rgba(0, 0, 0, 0.5)" : "white",
                  }}
                  primary={views.map((view) => {
                    return <ShowView key={view.id} view={view} />;
                  })}
                />
              </Box>
            </ListItem>
          </Link>
        </List>
      )}
    </Box>
  );
};

export default ShowMovie;
