import MenuIcon from "@mui/icons-material/Menu";
import { Link, useOutletContext } from "react-router-dom";
import { Typography, Stack, useMediaQuery } from "@mui/material";

export default function Navbar() {
  const { setShowMenu } = useOutletContext();
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Stack
      component={"header"}
      p={{ xs: 2, md: 3 }}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      gap={2}
    >
      {isMobile && <MenuIcon onClick={() => setShowMenu((prev) => !prev)} />}

      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Typography variant="h1" component={"h1"}>
          Bot AI
        </Typography>
      </Link>
    </Stack>
  );
}
