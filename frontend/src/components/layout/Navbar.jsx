import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
    >
      <Toolbar>

        <Typography
          variant="h6"
          sx={{ fontWeight: 700 }}
        >
          TaskFlow Pro
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <ThemeToggle />

      </Toolbar>
    </AppBar>
  );
}