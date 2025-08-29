import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, Typography } from "@mui/material";
import StyledButton from "./components/StyledButton";

export default function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode,
      primary: { main: mode === "light" ? "#1976d2" : "#90caf9" },
      background: {
        default: mode === "light" ? "#f7f7fb" : "#0f1115",
        paper: mode === "light" ? "#ffffff" : "#161a22",
      },
    },
    shape: { borderRadius: 12 },
  });

  const toggleTheme = () => setMode((m) => (m === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          {mode === "light" ? "Light Theme 🌞" : "Dark Theme 🌙"}
        </Typography>

        <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
      </Container>
    </ThemeProvider>
  );
}
