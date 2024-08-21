import { useState } from "react";
import { useGetMoviesQuery } from "../../redux/apiMovies";
import { useSelector } from "react-redux";
import ShowMovie from "../ShowMovie";
import CircularProgress from "@mui/material/CircularProgress";
import SearchSystem from "../SearchSystem";
import ModalWindow from "../ModalWindow";
import styles from "./index.module.css";

const ListMovies = () => {
  const [open, setOpen] = useState(false);

  const text = useSelector((state) => state.getSlice);

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

      <div className={styles.content}>
        <SearchSystem open={open} setOpen={setOpen} />

        <h5>Video on demand {`"${text}"`}</h5>

        <div className={styles.allMovies}>
          {movies.map((movie) => {
            return <ShowMovie key={movie.id.videoId} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ListMovies;
