import styles from "./index.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ShowMovie = ({ movie }) => {
  return (
    <>
      <div className={styles.cubes}>
        {/* <div> */}
        {/* <img
          src={movie.snippet.thumbnails.default.url}
          alt="Image Movie"
          width="245px"
          height="138px"
        /> */}

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              // width="245"
              image={movie.snippet.thumbnails.default.url}
              alt="Image Movie"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.snippet.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.snippet.channelTitle}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* <Card
          hoverable
          style={{
            width: 245,
            height: 138,
          }}
          cover={
            <img alt="Image Movie" src={movie.snippet.thumbnails.default.url} />
          }
        >
          <Meta
            className={styles.videoTitle}
            title={movie.snippet.title}
            description={movie.snippet.channelTitle}
          />
        </Card> */}

        {/* <p className={styles.videoTitle}>{movie.snippet.title}</p> */}
        {/* <p className={styles.author}>{movie.snippet.channelTitle}</p> */}
      </div>
    </>
  );
  // return <>аывтаавыолаыркгкруцщшк</>;
};

export default ShowMovie;
