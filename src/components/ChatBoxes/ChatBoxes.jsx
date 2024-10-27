import { Box, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Card from "./Card";
import botIcon from "../assets/bot.png";
import { useMemo } from "react";

const ChatBoxes = ({ generateResponse }) => {
  const data = useMemo(
    () => [
      {
        heading: "Hi, what is the weather",
        subtext: "Get immediate AI generated response",
      },
      {
        heading: "Hi, what is my location",
        subtext: "Get immediate AI generated response",
      },
      {
        heading: "Hi, what is the temperature",
        subtext: "Get immediate AI generated response",
      },
      {
        heading: "Hi, how are you",
        subtext: "Get immediate AI generated response",
      },
    ],
    []
  );

  return (
    <Stack height={1} justifyContent="flex-end" p={3}>
      <Stack alignItems="center" spacing={2} my={5} mb={15}>
        <Typography variant="h2" align="center">
          How Can I Help You Today?
        </Typography>
        <Box
          component="img"
          src={botIcon}
          height={{ xs: 50, md: 70 }}
          width={{ xs: 50, md: 70 }}
          boxShadow={4}
          borderRadius="50%"
          alt="Bot Icon"
        />
      </Stack>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {data.map((item) => (
          <Grid size={{ xs: 12, md: 6 }} key={item.heading}>
            <Card
              heading={item.heading}
              subtext={item.subtext}
              handleClick={() => generateResponse(item.heading)}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ChatBoxes;
