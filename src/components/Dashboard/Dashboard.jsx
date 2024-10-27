import { Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import data from "../../utils/aiData.json";
import { useOutletContext } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ChatBoxes from "../ChatBoxes/ChatBoxes";
import ChattingCard from "../ChattingCard/ChattingCard";
import MessageInput from "../MessageInput/MessageInput";
import FeedbackModal from "../FeedbackModal/FeedbackModal";

const Dashboard = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const listRef = useRef(null);
  const [chatId, setChatId] = useState(1);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const { chat, setChat } = useOutletContext();

  const generateResponse = (input) => {
    const response = data.find(
      (item) => input.toLowerCase() === item.question.toLowerCase()
    );

    let answer = "Sorry, Did not understand your query!";

    if (response !== undefined) {
      answer = response.response;
    }

    const newChatId = chatId;

    setChat((prev) => [
      ...prev,
      {
        type: "Human",
        text: input,
        time: new Date(),
        id: newChatId,
      },
      {
        type: "AI",
        text: answer,
        time: new Date(),
        id: newChatId + 1,
      },
    ]);

    setChatId(newChatId + 2);
  };

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView();
  }, [scrollToBottom]);

  return (
    <Stack
      height={"100vh"}
      justifyContent={"space-between"}
      sx={{
        "@media (max-width:767px)": {
          background: "linear-gradient(#F9FAFA 60%, #EDE4FF)",
        },
      }}
    >
      <Navbar />

      {chat.length === 0 && <ChatBoxes generateResponse={generateResponse} />}

      {chat.length > 0 && (
        <Stack
          height={1}
          flexGrow={0}
          p={{ xs: 2, md: 3 }}
          spacing={{ xs: 2, md: 3 }}
          sx={{
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(151, 133, 186,0.4)",
              borderRadius: "8px",
            },
          }}
          ref={listRef}
        >
          {chat.map((item, index) => (
            <ChattingCard
              details={item}
              key={index}
              updateChat={setChat}
              setSelectedChatId={setSelectedChatId}
              showFeedbackModal={() => setDisplayModal(true)}
            />
          ))}
        </Stack>
      )}

      <MessageInput
        generateResponse={generateResponse}
        setScroll={setScrollToBottom}
        chat={chat}
        clearChat={() => setChat([])}
      />

      <FeedbackModal
        open={displayModal}
        updateChat={setChat}
        chatId={selectedChatId}
        handleClose={() => setDisplayModal(false)}
      />
    </Stack>
  );
};

export default Dashboard;
