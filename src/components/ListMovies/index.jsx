import ShowMovie from "../ShowMovie";
import SearchSystem from "../SearchSystem";
import ModalWindow from "../ModalWindow";
import { useGetMoviesQuery } from "../../redux/apiMovies";
import { switchCard } from "../../redux/slices/switchCards";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ListIcon from "@mui/icons-material/List";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import styles from "./index.module.css";

const ListMovies = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const text = useSelector((state) => state.getSlice);
  const isSwitch = useSelector((state) => state.switchCards);

  const { data: movies, error, isLoading } = useGetMoviesQuery(text);

  if (isLoading) {
    return (
      <p>
        {" "}
        <CircularProgress color="inherit" />
      </p>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} />

      <div>
        <SearchSystem open={open} setOpen={setOpen} />

        <div className={styles.buttDirection}>
          <h4>Video on demand {`"${text}"`}</h4>

          <ToggleButtonGroup exclusive aria-label="text alignment">
            <ToggleButton
              value="left"
              aria-label="left aligned"
              onClick={() => dispatch(switchCard(false))}
            >
              <ListIcon />
            </ToggleButton>
            <ToggleButton
              value="center"
              aria-label="centered"
              onClick={() => dispatch(switchCard(true))}
            >
              <GridViewOutlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div className={isSwitch ? styles.allMoviesGrid : styles.allMoviesFlex}>
          {movies.map((movie) => {
            return <ShowMovie key={movie.id.videoId} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ListMovies;
