import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { enterText } from "../../redux/slices/getTextForSearch";
import { useSelector, useDispatch } from "react-redux";

const ButtonForSearch = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const textFromInput = useSelector((state) => state.getTextFromInput);

  const findMovies = () => {
    dispatch(enterText(textFromInput));
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
