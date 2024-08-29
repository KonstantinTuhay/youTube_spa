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

const ShowMovie = ({ movie }) => {
  const isSwitch = useSelector((state) => state.switchCards);

  const linkOnYouTube = import.meta.env.VITE_LINK_ON_YOUTUBE + movie.id.videoId;

  return (
    <>
      <Box>
        {isSwitch ? (
          <Card>
            <Link to={linkOnYouTube} target="_blank">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="165"
                  image={movie.snippet.thumbnails.high.url}
                  alt="Image Movie"
                />
                <CardContent sx={{ minHeight: "80px", minWidth: "300px" }}>
                  <Typography
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      ["-webkit-line-clamp"]: 2,
                      ["-webkit-box-orient"]: "vertical",
                      color: "black",
                    }}
                    gutterBottom
                  >
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
          <List
            sx={{
              width: "100%",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              padding: 0,
            }}
          >
            <Link to={linkOnYouTube} target="_blank">
              <ListItem
                sx={{
                  padding: 0,
                }}
              >
                <Card>
                  <CardActionArea>
                    <CardMedia
                      sx={{ height: "140px" }}
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
                  <ListItemText primary={movie.snippet.title} />
                  <ListItemText primary={movie.snippet.channelTitle} />
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
