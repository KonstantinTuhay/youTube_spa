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
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./index.module.css";

const ListItemInFavorites = ({ videoName, setOpen }) => {
  const { id, text, maxQuantity, sort } = videoName;

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
    dispatch(setValueForSorting("relevance"));
    dispatch(sendCurrentItemSlider(maxQuantity));
    dispatch(getCurrentItemSlider(24));
    dispatch(enterText(text));
    navigate("/list");
  };

  return (
    <>
      {" "}
      <div className={styles.oneFavoriteVideo}>
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
      </div>
    </>
  );
};

export default ListItemInFavorites;
