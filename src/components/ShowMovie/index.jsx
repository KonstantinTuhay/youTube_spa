import styles from "./index.module.css";

const ShowMovie = ({ movie }) => {
  return (
    <>
      <div className={styles.cubes}>
        <img
          src={movie.snippet.thumbnails.default.url}
          alt="Image Movie"
          width="245px"
          height="138px"
        />
        <p className={styles.videoTitle}>{movie.snippet.title}</p>
        <p className={styles.author}>{movie.snippet.channelTitle}</p>
      </div>
    </>
  );
  // return <>аывтаавыолаыркгкруцщшк</>;
};

export default ShowMovie;
