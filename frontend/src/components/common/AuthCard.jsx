import { Paper } from "@mui/material";

export default function AuthCard({ children }) {
  return (
    <Paper
      elevation={20}
      sx={{
        width: 430,
        maxWidth: "100%",
        p: 5,
        borderRadius: 4,
        backdropFilter: "blur(20px)",
        background: "rgba(255,255,255,.92)",
      }}
    >
      {children}
    </Paper>
  );
}