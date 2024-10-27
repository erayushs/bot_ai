import { TextField, Box, Button, Stack, Snackbar } from "@mui/material";
import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const MessageInput = ({ generateResponse, setScroll, chat, clearChat }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (input.trim()) {
        generateResponse(input);
        setInput("");
        setScroll((prev) => !prev);
      }
    },
    [input, generateResponse, setScroll]
  );

  const handleSave = useCallback(() => {
    const chatHistory = JSON.parse(localStorage.getItem("chat")) || [];
    const date = new Date();

    localStorage.setItem(
      "chat",
      JSON.stringify([{ chat, datetime: date }, ...chatHistory])
    );
    clearChat();
    setShowSnackbar(true);
  }, [chat, clearChat]);

  useEffect(() => {
    inputRef.current.focus();
  }, [input]);

  return (
    <Box
      flexShrink={0}
      px={{ xs: 0.5, md: 3 }}
      pb={{ xs: 3, md: 3 }}
      mt={4}
      mx={{ xs: 2, md: 0 }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <Stack direction="row" spacing={{ xs: 0.5, md: 2 }}>
          <TextField
            sx={{
              flex: 1,
              bgcolor: "#ffffff",
              borderRadius: 1,
              "& input": {
                fontFamily: "Ubuntu, sans-serif",
                fontSize: { xs: 12, md: 16 },
                paddingX: { xs: 1, md: 2 },
              },
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
            inputRef={inputRef}
            placeholder="Type your message..."
          />
          <Button
            variant="contained"
            type="submit"
            disabled={!input.trim()}
            sx={{
              fontSize: { xs: 12, md: 16 },
              "@media (max-width:767px)": {
                minWidth: 0,
                paddingX: 1.5,
              },
            }}
          >
            Ask
          </Button>
          <Button
            variant="outlined"
            onClick={handleSave}
            disabled={chat.length === 0}
            sx={{
              fontSize: { xs: 12, md: 16 },
              "@media (max-width:767px)": {
                minWidth: 0,
                paddingX: 1.5,
              },
            }}
          >
            Save
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={showSnackbar}
        message="Chat saved."
        onClose={() => setShowSnackbar(false)}
        autoHideDuration={5000}
        action={
          <Link to="/history">
            <Button size="small">See past conversations</Button>
          </Link>
        }
      />
    </Box>
  );
};

export default MessageInput;
