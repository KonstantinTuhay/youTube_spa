import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../../redux/slices/addFavorites";
import { editId } from "../../redux/slices/editIdSlice";
import { editPreText } from "../../redux/slices/editPreviousText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import styles from "./index.module.css";

const Favorites = () => {
  const getEditText = useSelector((state) => state.editPreviousText);
  const getEditId = useSelector((state) => state.editIdSlice);
  const dispatch = useDispatch();
  const style = {
    py: 0,
    width: "100%",
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };

  const focusOnEditInput = useRef(null);
  useEffect(() => {
    console.log(232432423432);
    // focusOnEditInput.current.focus();
  }, [getEditText]);

  const styleForModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    dispatch(editId(null));
    dispatch(editPreText(null));
    setOpen(false);
  };

  const favoriteMovie = useSelector((state) => state.addFavorites);

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const saveChangeRequest = (id) => {
    dispatch(edit({ id: id, text: getEditText }));
    dispatch(editId(null));
    dispatch(editPreText(null));
    setOpen(false);
  };

  const typeEdit = (e) => {
    dispatch(editPreText(e));
  };

  const handleEditId = (id, text) => {
    dispatch(editId(id));
    dispatch(editPreText(text));
    setOpen(true);
  };

  return (
    <>
      <div className={styles.container}>
        <h2>FAVORITES</h2>

        {favoriteMovie.length === 0 ? (
          ""
        ) : (
          <List sx={styles.list}>
            {/* <List className={styles.list}> */}
            {favoriteMovie.map((videoName, index) => {
              if (videoName.id === getEditId || getEditId !== null) {
                return (
                  <Modal
                    key={crypto.randomUUID()}
                    open={open}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={styleForModal} className={styles.mainBox}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <h2>Change request</h2>{" "}
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Box
                          className={styles.box}
                          component="form"
                          sx={{
                            "& > :not(style)": { m: 1 },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <FormControl variant="standard" disabled>
                            <InputLabel htmlFor="component-simple" disabled>
                              Request
                            </InputLabel>
                            <Input
                              id="component-simple"
                              defaultValue={getEditText}
                            />
                          </FormControl>
                          <br />
                          <FormControl variant="standard">
                            <InputLabel htmlFor="component-simple">
                              Change request
                            </InputLabel>
                            <Input
                              // inputRef={focusOnEditInput}
                              ref={focusOnEditInput}
                              id="component-simple"
                              defaultValue={getEditText}
                              onChange={(e) => typeEdit(e.target.value)}
                            />
                          </FormControl>
                          <br />
                          <FormControl
                            variant="standard"
                            sx={{ m: 1, minWidth: 120 }}
                          >
                            <InputLabel id="sorting">Sorting</InputLabel>
                            <Select
                              labelId="sorting"
                              id="sorting"
                              value={age}
                              onChange={handleChange}
                              label="Sorting"
                            >
                              <MenuItem value={10}>default</MenuItem>
                              <MenuItem value={20}>date</MenuItem>
                              <MenuItem value={30}>score</MenuItem>
                              <MenuItem value={30}>name</MenuItem>
                              <MenuItem value={30}>views</MenuItem>
                            </Select>
                          </FormControl>
                          <br />

                          <InputLabel
                            id="maximum"
                            className={styles.inputMaximum}
                          >
                            <p className={styles.inputMaximum}>
                              Maximum quantity
                            </p>
                          </InputLabel>
                          <FormControl
                            variant="standard"
                            sx={{ m: 1, minWidth: 120 }}
                          >
                            <Slider
                              label="Maximum quantity"
                              labelId="maximum"
                              aria-label="Videos"
                              defaultValue={30}
                              // getAriaValueText={10}
                              valueLabelDisplay="auto"
                              shiftStep={30}
                              step={10}
                              marks
                              min={10}
                              max={100}
                            />
                          </FormControl>
                          <br />
                          <div>
                            <Button
                              variant="contained"
                              onClick={() => saveChangeRequest(getEditId)}
                            >
                              Save
                            </Button>{" "}
                            <Button
                              variant="outlined"
                              onClick={handleCloseModal}
                            >
                              Do not save
                            </Button>
                          </div>
                        </Box>
                      </Typography>
                    </Box>
                  </Modal>
                );
              } else if (index === favoriteMovie.length - 1) {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className={styles.oneFavoriteVideo}
                  >
                    <ListItem>
                      <ListItemText primary={videoName.text} />
                      <IconButton
                        aria-label="delete"
                        onClick={() =>
                          handleEditId(videoName.id, videoName.text)
                        }
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                  </div>
                );
              } else {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className={styles.oneFavoriteVideo}
                  >
                    <ListItem>
                      <ListItemText primary={videoName.text} />
                      <IconButton
                        aria-label="delete"
                        onClick={() =>
                          handleEditId(videoName.id, videoName.text)
                        }
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                    <Divider variant="middle" component="li" />
                  </div>
                );
              }
            })}
          </List>
        )}
      </div>
    </>
  );
};

export default Favorites;
