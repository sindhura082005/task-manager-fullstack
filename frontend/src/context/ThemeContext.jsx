import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext();

export function useThemeMode() {
  return useContext(ThemeContext);
}

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          primary: {
            main: "#2563EB",
          },

          secondary: {
            main: "#0F172A",
          },

          background: {
            default: mode === "light" ? "#F5F7FA" : "#111827",
            paper: mode === "light" ? "#FFFFFF" : "#1F2937",
          },
        },

        typography: {
          fontFamily: "Poppins",
        },

        shape: {
          borderRadius: 12,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}