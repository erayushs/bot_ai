import { Typography, Box, Stack, Button, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import editIcon from "../assets/edit.png";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.png";

export default function Sidebar({ setChat, closeMenu }) {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box>
      {isMobile && (
        <Button
          endIcon={<CloseIcon />}
          sx={{
            width: 1,
            justifyContent: "flex-end",
            color: "primary.dark",
            cursor: "pointer",
          }}
          onClick={closeMenu}
        >
          Close
        </Button>
      )}

      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Stack
          onClick={() => {
            setChat([]);
            closeMenu();
          }}
          sx={{
            bgcolor: "primary.main",
            "&:hover ": {
              bgcolor: "primary.bg",
            },
          }}
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={2}
          px={{ xs: 2, md: 3 }}
        >
          <Box
            component={"img"}
            src={logo}
            height={42}
            width={42}
            borderRadius={2}
            boxShadow={4}
            flexShrink={0}
          />

          <Typography variant={"h3"}>New Chat</Typography>

          <Box
            component={"img"}
            src={editIcon}
            height={42}
            width={42}
            borderRadius={2}
          />
        </Stack>
      </Link>

      <Box p={{ xs: 2, md: 3 }}>
        <Link to={"/history"}>
          <Button
            variant="contained"
            sx={{
              width: 1,
              color: "#414146",
              fontWeight: 700,
              fontSize: 16,
              borderRadius: 3,
            }}
            onClick={closeMenu}
          >
            Past Conversations
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
