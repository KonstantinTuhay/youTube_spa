import { useDispatch, useSelector } from "react-redux";
import { getText } from "../../redux/slices/getTextFromInput";
import { change } from "../../redux/slices/changesColors";
import InputBase from "@mui/material/InputBase";

const InputForSearch = ({ textFromInput }) => {
  const dispatch = useDispatch();

  const favoriteMovie = useSelector((state) => state.addEditRemoveFavorites);

  const similarText = (e) => {
    dispatch(getText(e.target.value));
    const isSimilar = favoriteMovie.find((item) => item === e.target.value);
    isSimilar ? dispatch(change("black")) : dispatch(change("red"));
  };

  return (
    <InputBase
      fullWidth="true"
      sx={{ ml: 1, flex: 1, fontSize: "25px" }}
      placeholder="Enter your request"
      value={textFromInput}
      onChange={(e) => similarText(e)}
    />
  );
};

export default InputForSearch;
