import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const ButtonForSearch = () => {
  const navigate = useNavigate();
  const findMovies = () => {
    navigate("/list");
  };

  return (
    <>
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon onClick={findMovies} sx={{ fontSize: "40px" }} />
      </IconButton>
    </>
  );
};

export default ButtonForSearch;
