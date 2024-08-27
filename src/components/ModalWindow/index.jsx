import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { edit } from "../../redux/slices/addFavorites";
import { editId } from "../../redux/slices/editIdSlice";
import { editPreText } from "../../redux/slices/editPreviousText";
import styles from "./index.module.css";

const ModalWindow = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const getEditText = useSelector((state) => state.editPreviousText);
  const getEditId = useSelector((state) => state.editIdSlice);

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

  const handleCloseModal = () => {
    dispatch(editId(null));
    dispatch(editPreText(null));
    setOpen(false);
  };

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

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleForModal} className={styles.mainBox}>
          <Typography id="modal-modal-title" variant="h4">
            Change request{" "}
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
                <Input id="component-simple" defaultValue={getEditText} />
              </FormControl>
              <br />
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">
                  Change request
                </InputLabel>
                <Input
                  id="component-simple"
                  defaultValue={getEditText}
                  onChange={(e) => typeEdit(e.target.value)}
                />
              </FormControl>
              <br />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
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

              <InputLabel id="maximum" className={styles.inputMaximum}>
                <Typography className={styles.inputMaximum}>
                  Maximum quantity
                </Typography>
              </InputLabel>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Slider
                  label="Maximum quantity"
                  labelId="maximum"
                  aria-label="Videos"
                  defaultValue={30}
                  valueLabelDisplay="auto"
                  shiftStep={30}
                  step={10}
                  marks
                  min={10}
                  max={100}
                />
              </FormControl>
              <br />
              <Box>
                <Button
                  variant="contained"
                  onClick={() => saveChangeRequest(getEditId)}
                >
                  Save
                </Button>{" "}
                <Button variant="outlined" onClick={handleCloseModal}>
                  Do not save
                </Button>
              </Box>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalWindow;
