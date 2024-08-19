import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

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

const Favorites = () => {
  const style = {
    py: 0,
    width: "100%",
    // maxWidth: 360,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };

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
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const favoriteMovie = useSelector((state) => state.addFavorites);
  console.log(favoriteMovie);

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className={styles.container}>
        <h2>FAVORITES</h2>

        {favoriteMovie.length === 0 ? (
          ""
        ) : (
          <List sx={style}>
            {favoriteMovie.map((videoName, index) => {
              if (index === favoriteMovie.length - 1) {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className={styles.oneFavoriteVideo}
                  >
                    <ListItem>
                      <ListItemText primary={videoName} />
                      <IconButton aria-label="delete" onClick={handleOpenModal}>
                        <EditIcon />
                      </IconButton>
                      <Modal
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
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
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
                                  defaultValue={videoName}
                                />
                              </FormControl>
                              <br />
                              <FormControl variant="standard">
                                <InputLabel htmlFor="component-simple">
                                  Change request
                                </InputLabel>
                                <Input
                                  id="component-simple"
                                  defaultValue={videoName}
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
                                Maximum quantity
                              </InputLabel>
                              <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120 }}
                              >
                                <Slider
                                  // label="Maximum quantity"
                                  // labelId="maximum"
                                  // aria-label="Videos"
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
                                <Button variant="contained">Save</Button>{" "}
                                <Button variant="outlined">Do not save</Button>
                              </div>
                            </Box>
                          </Typography>
                        </Box>
                      </Modal>
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
                      <ListItemText primary={videoName} />
                      <IconButton aria-label="delete" onClick={handleOpenModal}>
                        <EditIcon />
                      </IconButton>
                      <Modal
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
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
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
                                  defaultValue={videoName}
                                />
                              </FormControl>
                              <br />
                              <FormControl variant="standard">
                                <InputLabel htmlFor="component-simple">
                                  Change request
                                </InputLabel>
                                <Input
                                  id="component-simple"
                                  defaultValue={videoName}
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
                                Maximum quantity
                              </InputLabel>
                              <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120 }}
                              >
                                <Slider
                                  // label="Maximum quantity"
                                  // labelId="maximum"
                                  // aria-label="Videos"
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
                                <Button variant="contained">Save</Button>{" "}
                                <Button variant="outlined">Do not save</Button>
                              </div>
                            </Box>
                          </Typography>
                        </Box>
                      </Modal>
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
