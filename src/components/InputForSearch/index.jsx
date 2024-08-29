import InputBase from "@mui/material/InputBase";
import { useDispatch, useSelector } from "react-redux";
import { enterText } from "../../redux/slices/getTextForSearch";
import { change } from "../../redux/slices/changesColors";

const InputForSearch = () => {
  const dispatch = useDispatch();

  const text = useSelector((state) => state.getTextForSearch);
  const favoriteMovie = useSelector((state) => state.addEditRemoveFavorites);

  const similarText = (e) => {
    dispatch(enterText(e.target.value));
    const isSimilar = favoriteMovie.find((item) => item === e.target.value);
    if (isSimilar) {
      dispatch(change("black"));
    } else {
      dispatch(change("red"));
    }
  };

  return (
    <>
      {" "}
      <InputBase
        fullWidth="true"
        sx={{ ml: 1, flex: 1, fontSize: "25px" }}
        placeholder="Enter your request"
        value={text}
        onChange={(e) => similarText(e)}
      />
    </>
  );
};

export default InputForSearch;
