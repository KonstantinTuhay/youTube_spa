import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { enterText } from "../../redux/slices/getTextForSearch";
import { useSelector, useDispatch } from "react-redux";
import { sendCurrentItemSlider } from "../../redux/slices/sendItemSlider";
import { getCurrentItemSlider } from "../../redux/slices/getItemSlider";

const ButtonForSearch = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const itemSlider = useSelector((state) => state.getItemSlider);
  const textFromInput = useSelector((state) => state.getTextFromInput);
  console.log(`ite`, itemSlider);

  const findMovies = () => {
    dispatch(sendCurrentItemSlider(itemSlider));
    dispatch(enterText(textFromInput));
    dispatch(getCurrentItemSlider(24));
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
