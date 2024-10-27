import { Box, Button, Select, MenuItem, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const FilterChat = ({ allChats, filterChats }) => {
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const isMobile = useMediaQuery("(max-width:900px)"); // Check for mobile screen

  const handleFilterChange = (rating) => {
    setSelectedRating(rating);
  };

  useEffect(() => {
    const filteredChats =
      selectedRating === "All Ratings"
        ? allChats
        : allChats.filter((item) =>
            item.chat.some((ch) => ch.rating === selectedRating)
          );

    filterChats(filteredChats);
  }, [selectedRating, allChats, filterChats]);

  const ratings = ["All Ratings", 1, 2, 3, 4, 5];

  return (
    <Box mb={3}>
      {isMobile ? (
        <Select
          value={selectedRating}
          onChange={(e) => handleFilterChange(e.target.value)}
          size="small"
          sx={{ minWidth: { xs: 1, md: 160 } }}
        >
          {ratings.map((rating) => (
            <MenuItem key={rating} value={rating}>
              {rating === "All Ratings"
                ? rating
                : `${rating} Star${rating > 1 ? "s" : ""}`}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={1}>
          {ratings.map((rating) => (
            <Button
              key={rating}
              variant={selectedRating === rating ? "contained" : "outlined"}
              color="primary"
              onClick={() => handleFilterChange(rating)}
              sx={{
                minWidth: 100,
                borderRadius: 1,
                typography: { xs: "caption", md: "body2" },
                "&:hover": {
                  backgroundColor:
                    selectedRating === rating
                      ? "primary.dark"
                      : "primary.light",
                },
              }}
            >
              {rating === "All Ratings"
                ? rating
                : `${rating} Star${rating > 1 ? "s" : ""}`}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FilterChat;
