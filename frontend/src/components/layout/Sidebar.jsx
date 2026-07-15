import { Box, Typography } from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: "#0F172A",
        color: "white",
        minHeight: "100vh",
        p: 3,
      }}
    >
      <Typography variant="h5">
        Dashboard
      </Typography>
    </Box>
  );
}