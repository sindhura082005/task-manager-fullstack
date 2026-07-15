import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>

        <Typography
          variant="h6"
          sx={{ fontWeight: 700 }}
        >
          TaskFlow Pro
        </Typography>

      </Toolbar>
    </AppBar>
  );
}