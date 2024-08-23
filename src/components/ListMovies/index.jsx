import { useState } from "react";
import { useGetMoviesQuery } from "../../redux/apiMovies";
import { useSelector } from "react-redux";
import ShowMovie from "../ShowMovie";
import CircularProgress from "@mui/material/CircularProgress";
import SearchSystem from "../SearchSystem";
import ModalWindow from "../ModalWindow";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ListIcon from "@mui/icons-material/List";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import styles from "./index.module.css";

const ListMovies = () => {
  const [open, setOpen] = useState(false);

  const text = useSelector((state) => state.getSlice);

  const { data: movies, error, isLoading } = useGetMoviesQuery(text);
  console.log(movies);

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

  const [alignment, setAlignment] = useState("left");
  // const [devices, setDevices] = useState(() => ["phone"]);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  // const handleDevices = (event, newDevices) => {
  //   if (newDevices.length) {
  //     setDevices(newDevices);
  //   }
  // };

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} />

      <div className={styles.content}>
        <SearchSystem open={open} setOpen={setOpen} />

        <h5>Video on demand {`"${text}"`}</h5>

        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <ListIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <GridViewOutlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>

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
