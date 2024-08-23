import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./index.module.css";

const ShowMovie = ({ movie }) => {
  console.log(movie);
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

        <Card>
          <Link
            to={`https://www.youtube.com/watch?v=${movie.id.videoId}`}
            target="_blank"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="165"
                // width="245"
                image={movie.snippet.thumbnails.high.url}
                alt="Image Movie"
              />
              <CardContent className={styles.cardContent}>
                <Typography
                  gutterBottom
                  // variant="h5"
                  // component="div"
                  className={styles.title}
                >
                  {movie.snippet.title}
                </Typography>
                <Typography
                  //  variant="body2"
                  color="text.secondary"
                >
                  {movie.snippet.channelTitle}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
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
