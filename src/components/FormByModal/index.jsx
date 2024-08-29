import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import { edit } from "../../redux/slices/addEditRemoveFavorites";
import { getId } from "../../redux/slices/getIdMovie";
import { getPreText } from "../../redux/slices/getPreviousText";
import { getCurrentItemSlider } from "../../redux/slices/getItemSlider";
import { addFavoriteMovie } from "../../redux/slices/addEditRemoveFavorites";
import { change } from "../../redux/slices/changesColors";

const FormByModal = ({ setOpen }) => {
  const dispatch = useDispatch();
  const getEditText = useSelector((state) => state.getPreviousText);
  const getEditId = useSelector((state) => state.getIdMovie);
  const textFromInpit = useSelector((state) => state.getTextFromInput);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const saveChangeRequest = (id) => {
    // const objRequest = {
    //   id: crypto.randomUUID(),
    //   text: textFromInpit,
    //   // maxQuantity: `${itemSlider}`,
    // };
    // dispatch(addFavoriteMovie(objRequest));
    // dispatch(getId(objRequest.id));
    // dispatch(getPreText(textFromInpit));
    dispatch(edit({ id: id, text: getEditText }));
    dispatch(getId(null));
    dispatch(getPreText(null));
    setOpen(false);
  };

  const typeEdit = (e) => {
    dispatch(getPreText(e));
  };

  const handleCloseModal = () => {
    dispatch(getId(null));
    dispatch(getPreText(null));
    setOpen(false);
  };

  const getItemSlider = (e) => {
    // console.log(e.target.value);
    dispatch(getCurrentItemSlider(e.target.value));
  };

  return (
    <>
      {" "}
      <FormControl
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          backgroundColor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          borderRadius: "30px",
        }}
      >
        <Typography id="modal-modal-title" variant="h4">
          Change request{" "}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
              display: "flex",
              flexDirection: "column",
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
              <InputLabel htmlFor="component-simple">Change request</InputLabel>
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

            <FormControl>
              <InputLabel
                id="maximum"
                sx={{
                  position: "relative",
                  left: -13,
                }}
              >
                Maximum quantity
              </InputLabel>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Slider
                label="Maximum quantity"
                labelId="maximum"
                aria-label="Videos"
                // getAriaValueText={valuetext}
                defaultValue={24}
                valueLabelDisplay="auto"
                shiftStep={24}
                step={10}
                marks
                min={4}
                max={100}
                onChange={(e) => getItemSlider(e)}
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
      </FormControl>
    </>
  );
};

export default FormByModal;
