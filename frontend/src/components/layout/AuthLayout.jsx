import { Box } from "@mui/material";

export default function AuthLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
        backgroundSize: "300% 300%",
        p: 2,
      }}
    >
      {children}
    </Box>
  );
}