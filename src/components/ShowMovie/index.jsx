import styles from "./index.module.css";
import { Card } from "antd";

const { Meta } = Card;

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
        <Card
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
        </Card>

        {/* <p className={styles.videoTitle}>{movie.snippet.title}</p> */}
        {/* <p className={styles.author}>{movie.snippet.channelTitle}</p> */}
      </div>
    </>
  );
  // return <>аывтаавыолаыркгкруцщшк</>;
};

export default ShowMovie;
