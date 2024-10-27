import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [chat, setChat] = useState([]);

  return (
    <>
      <CssBaseline />
      <Grid
        container
        sx={{
          background:
            "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
        }}
      >
        <Grid
          size={{ md: 2.5 }}
          sx={{
            bgcolor: "#ffffff",
            "@media (max-width:900px)": {
              width: "70%",
              transform: showMenu ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 500ms ease",
            },
          }}
          position={{ xs: "fixed", md: "relative" }}
          height={"100vh"}
          zIndex={{ xs: 9999, md: 1 }}
          boxShadow={{ xs: showMenu ? 10 : 0, md: 0 }}
        >
          <Sidebar setChat={setChat} closeMenu={() => setShowMenu(false)} />
        </Grid>

        <Grid size={{ xs: 12, md: 9.5 }}>
          <Outlet
            context={{
              chat: chat,
              setChat: setChat,
              setShowMenu: setShowMenu,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
