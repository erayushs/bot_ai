import { Typography, Box, Stack, Divider } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState, useMemo } from "react";
import FilterChat from "../FilterChat/FilterChat";
import ChatRecord from "../ChatRecord/ChatRecord";

const History = () => {
  const [chats, setChats] = useState([]);
  const [filteredChats, setFilteredChats] = useState([]);

  useEffect(() => {
    const localChats = JSON.parse(localStorage.getItem("chat")) || [];
    setChats(localChats);
    setFilteredChats(localChats);
  }, []);

  const filteredResults = useMemo(() => {
    return filteredChats.length > 0 ? filteredChats : [];
  }, [filteredChats]);

  const scrollbarStyles = {
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "10px",
      transition: "width 0.3s ease",
    },
    "&:hover::-webkit-scrollbar": {
      width: "14px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
      borderRadius: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(151, 133, 186,0.4)",
      borderRadius: "8px",
    },
  };

  return (
    <Box height="100vh" overflow="hidden" sx={scrollbarStyles}>
      <Navbar />
      <Box p={{ xs: 2, md: 3 }}>
        <Typography variant="h2" textAlign="center" mb={3}>
          Conversation History
        </Typography>

        {chats.length > 0 && (
          <FilterChat allChats={chats} filterChats={setFilteredChats} />
        )}

        {chats.length === 0 && (
          <Typography
            textAlign="center"
            p={3}
            bgcolor="primary.light"
            borderRadius={2}
          >
            No saved chats.
          </Typography>
        )}

        {chats.length > 0 && filteredResults.length === 0 && (
          <Typography
            textAlign="center"
            p={3}
            bgcolor="primary.light"
            borderRadius={2}
          >
            No such chats.
          </Typography>
        )}

        {filteredResults.length > 0 && (
          <Stack
            spacing={4}
            divider={
              <Divider sx={{ borderColor: "primary.bg", opacity: 0.4 }} />
            }
          >
            {filteredResults.map((item, index) => (
              <ChatRecord details={item} key={index} />
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default History;
