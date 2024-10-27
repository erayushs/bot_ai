import { Box, Typography, Stack, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useCallback } from "react";

const Card = ({ heading, subtext, handleClick }) => {
  const handleCardClick = useCallback(() => {
    handleClick(heading);
  }, [handleClick, heading]);

  return (
    <Stack
      bgcolor={"#ffffff"}
      color={"#f0f0f0"}
      p={{ xs: 1.2, md: 3 }}
      borderRadius={1}
      boxShadow={"0 0 12px rgba(0,0,0,0.1)"}
      direction={"row"}
      spacing={1}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        "&:hover .MuiIconButton-root": {
          opacity: 1,
        },
        cursor: "pointer",
        "&:hover": {
          bgcolor: "primary.bglight",
        },
        transition: "background 300ms ease",
      }}
      onClick={handleCardClick}
    >
      <Box>
        <Typography
          variant="h1"
          fontWeight={700}
          fontSize={{ xs: 18, md: 20 }}
          color="text.black"
        >
          {heading}
        </Typography>
        <Typography
          variant="h2"
          color={"text.secondary"}
          fontSize={{ xs: 14, md: 16 }}
          mt={2}
        >
          {subtext}
        </Typography>
      </Box>
      <IconButton
        size="small"
        sx={{
          opacity: 0,
          bgcolor: "primary.bglight",
          transition: "opacity 400ms ease",
        }}
      >
        <ArrowUpwardIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
};

export default Card;
