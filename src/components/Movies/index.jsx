import { useSelector } from "react-redux";
import ShowMovie from "../ShowMovie";
import Box from "@mui/material/Box";

const Movies = ({ movies, views }) => {
  const isSwitch = useSelector((state) => state.switchCards);

  const allMoviesGrid = {
    mt: "5px",
    display: "grid",
    ["grid-template-columns"]: "auto auto auto auto",
    gap: "10px",
  };

  const allMoviesFlex = {
    display: "flex",
    ["flex-direction"]: "column",
    mt: "5px",
    gap: "10px",
  };

  return (
    <Box sx={isSwitch ? allMoviesGrid : allMoviesFlex}>
      {movies.map((movie) => {
        return <ShowMovie key={movie.id.videoId} movie={movie} views={views} />;
      })}
    </Box>
  );
};

export default Movies;
