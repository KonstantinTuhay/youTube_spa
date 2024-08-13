const ShowMovie = ({ movie }) => {
  console.log(movie);
  return (
    <>
      {/* {movie.snippet.thumbnails.default} */}

      <img src={movie.snippet.thumbnails.default.url} alt="Image Movie" />
      <br />
      {movie.snippet.title}
      <br />
      {movie.snippet.channelTitle}
      <br />
      <br />
      <br />
    </>
  );
  // return <>аывтаавыолаыркгкруцщшк</>;
};

export default ShowMovie;
