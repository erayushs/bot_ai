import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D7C7F4",
      dark: "#AF9FCD",
      bglight: "#fafafa",
      bgtheme: "#FAF7FF",
      bg: "#AF9FCD",
      h3: "#414146",
    },

    text: {
      black: "#000000",
    },
  },
  typography: {
    h1: {
      fontFamily: "Ubuntu, sans-serif",
      color: "#9785BA",
      fontSize: 28,
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Ubuntu, sans-serif",
      color: "text.primary",
      fontSize: 28,
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: 25,
      },
    },

    h3: {
      fontFamily: "Ubuntu, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      color: "#000000",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: "large",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "Open Sans, sans-serif",
        },
        contained: {
          fontFamily: "Ubuntu, sans-serif",
          border: 1,
        },
        outlined: {
          fontFamily: "Ubuntu, sans-serif",
          color: "#000",
          borderColor: "#9785BA",
          "&:hover": {
            background: "#AF9FCD",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
