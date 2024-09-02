import { getId } from "../../redux/slices/getIdMovie";
import { isDivide } from "../../redux/slices/divideFeatureForModal";
import { getCurrentItemSlider } from "../../redux/slices/getItemSlider";
import { sendCurrentItemSlider } from "../../redux/slices/sendItemSlider";
import { getValueForSorting } from "../../redux/slices/getSortValue";
import { setValueForSorting } from "../../redux/slices/setSortValue";
import { getPreText } from "../../redux/slices/getPreviousText";
import { remove } from "../../redux/slices/addEditRemoveFavorites";
import { enterText } from "../../redux/slices/getTextForSearch";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./index.module.css";

const ListItemInFavorites = ({ videoName, setOpen }) => {
  const { id, text, maxQuantity, sort } = videoName;

  const defValQuantityMovie = 24; //that's used for default value quantity movie
  const defValForSorting = "relevance"; //that's used for default value sorting

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeFavorite = (id) => {
    dispatch(remove(id));
  };

  const handleEditId = (id, text, maxQuantity, sort) => {
    dispatch(setValueForSorting(sort));
    dispatch(getCurrentItemSlider(maxQuantity));
    dispatch(isDivide(true));
    dispatch(getId(id));
    dispatch(getPreText(text));
    setOpen(true);
  };

  const clickSearch = (text) => {
    dispatch(getValueForSorting(sort));
    dispatch(sendCurrentItemSlider(maxQuantity));
    dispatch(enterText(text));
    dispatch(getCurrentItemSlider(defValQuantityMovie));
    dispatch(setValueForSorting(defValForSorting));
    navigate("/list");
  };

  return (
    <Box className={styles.oneFavoriteVideo}>
      <ListItem>
        <ListItemText primary={text} onClick={() => clickSearch(text)} />

        <IconButton
          aria-label="delete"
          onClick={() => handleEditId(id, text, maxQuantity, sort)}
        >
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon onClick={() => removeFavorite(id)} />
        </IconButton>
      </ListItem>
    </Box>
  );
};

export default ListItemInFavorites;
