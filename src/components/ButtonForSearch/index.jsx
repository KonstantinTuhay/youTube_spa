import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendCurrentItemSlider } from "../../redux/slices/sendItemSlider";
import { getCurrentItemSlider } from "../../redux/slices/getItemSlider";
import { enterText } from "../../redux/slices/getTextForSearch";
import { getValueForSorting } from "../../redux/slices/getSortValue";
import { setValueForSorting } from "../../redux/slices/setSortValue";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const ButtonForSearch = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const defValQuantityMovie = 24; //that's used for default value quantity movie
  const defValForSorting = "relevance"; //that's used for default value sorting

  const itemSlider = useSelector((state) => state.getItemSlider);
  const textFromInput = useSelector((state) => state.getTextFromInput);
  const setSort = useSelector((state) => state.setSortValue);

  const findMovies = () => {
    dispatch(getValueForSorting(setSort));
    dispatch(sendCurrentItemSlider(itemSlider));
    dispatch(enterText(textFromInput));
    dispatch(setValueForSorting(defValForSorting));
    dispatch(getCurrentItemSlider(defValQuantityMovie));
    navigate("/list");
  };

  return (
    <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
      <SearchIcon onClick={findMovies} sx={{ fontSize: "40px" }} />
    </IconButton>
  );
};

export default ButtonForSearch;
