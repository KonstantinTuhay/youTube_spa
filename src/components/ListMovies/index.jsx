import VariantView from "../VariantView";
import SearchSystem from "../SearchSystem";
import Movies from "../Movies";
import ModalWindow from "../ModalWindow";
import { useGetMoviesQuery } from "../../redux/apiMovies";
import { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const ListMovies = () => {
  const [open, setOpen] = useState(false);

  const text = useSelector((state) => state.getTextForSearch);

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

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} />

      <Box sx={{ ml: 3, mt: 5 }}>
        <SearchSystem open={open} setOpen={setOpen} style={style} />
        <VariantView />
        <Movies movies={movies} />
      </Box>
    </>
  );
};

export default ListMovies;
