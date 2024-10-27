import {
  Box,
  Stack,
  Typography,
  Modal,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useCallback } from "react";
import bulb from "../assets/bulb.png";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: 720,
  bgcolor: "primary.bgtheme",
  boxShadow: 24,
  borderRadius: "10px",
  p: { xs: 2, md: 3 },
};

const FeedbackModal = ({ open, handleClose, chatId, updateChat }) => {
  const [input, setInput] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      updateChat((prev) =>
        prev.map((item) =>
          item.id === chatId ? { ...item, feedback: input } : item
        )
      );

      setInput("");
      handleClose();
    },
    [chatId, input, handleClose, updateChat]
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="feedback-modal-title"
    >
      <Box sx={modalStyle}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1} alignItems="flex-end">
            <img src={bulb} alt="bulb_icon" height={"42px"} width={"40px"} />
            <Typography
              id="feedback-modal-title"
              variant="h6"
              fontSize={{ xs: 14, md: 20 }}
              pl={1}
            >
              Provide Additional Feedback
            </Typography>
          </Stack>
          <IconButton onClick={handleClose} aria-label="close modal">
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box
          component="form"
          pt={3}
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 2,
          }}
        >
          <TextField
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;
