import ShowMovie from "../ShowMovie";
import SearchSystem from "../SearchSystem";
import ModalWindow from "../ModalWindow";
import { useGetMoviesQuery } from "../../redux/apiMovies";
import { switchCard } from "../../redux/slices/switchCards";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ListIcon from "@mui/icons-material/List";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

const ListMovies = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const text = useSelector((state) => state.getSlice);
  const isSwitch = useSelector((state) => state.switchCards);

  const { data: movies, error, isLoading } = useGetMoviesQuery(text);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "6rem",
          textAlign: "center",
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const style = {
    width: "100%",
    textAlign: "start",
    variant: "h4",
    marginBottom: "10px",
  };

  const allMoviesGrid = {
    // margin: "0 auto",
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
    <>
      <ModalWindow open={open} setOpen={setOpen} />

      <Box sx={{ ml: 3, mt: 5 }}>
        <SearchSystem open={open} setOpen={setOpen} style={style} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "25px 0 0",
            color: "black",
            lineHeight: 0,
          }}
        >
          <Typography sx={{ fontWeight: 100, opacity: 0.8 }}>
            Video on demand {`"${text}"`}
          </Typography>

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
        </Box>
        <Box sx={isSwitch ? allMoviesGrid : allMoviesFlex}>
          {movies.map((movie) => {
            return <ShowMovie key={movie.id.videoId} movie={movie} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default ListMovies;
