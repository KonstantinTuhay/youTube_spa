import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import { editId } from "../../redux/slices/editIdSlice";
import { editPreText } from "../../redux/slices/editPreviousText";
import FormByModal from "../FormByModal";

const ModalWindow = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(editId(null));
    dispatch(editPreText(null));
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FormByModal setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default ModalWindow;
