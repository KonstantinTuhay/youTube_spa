import { useState } from "react";
import { useSelector } from "react-redux";
import VariantView from "../../components/VariantView";
import SearchSystem from "../../components/SearchSystem";
import Movies from "../../components/Movies";
import ModalWindow from "../../components/ModalWindow";
import { useGetMoviesQuery } from "../../redux/apiMovies";
import { Box, CircularProgress } from "@mui/material";

const ListMovies = () => {
  const [open, setOpen] = useState(false);

  const textFromInput = useSelector((state) => state.getTextFromInput);
  const text = useSelector((state) => state.getTextForSearch);
  const itemSlider = useSelector((state) => state.sendItemSlider);
  const getSort = useSelector((state) => state.getSortValue);

  const {
    data: movies,
    error,
    isLoading,
  } = useGetMoviesQuery([`${itemSlider}`, text, getSort]);

  if (isLoading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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

      <Box
        sx={{
          ml: 3,
          pt: 15,
          pb: 3,
        }}
      >
        <SearchSystem
          open={open}
          setOpen={setOpen}
          style={style}
          textFromInput={textFromInput}
        />
        <VariantView textFromInput={textFromInput} />
        <Movies movies={movies} />
      </Box>
    </>
  );
};

export default ListMovies;
