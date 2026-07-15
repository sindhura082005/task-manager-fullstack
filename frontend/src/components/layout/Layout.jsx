import { Box } from "@mui/material";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>

      <Sidebar />

      <Box sx={{ flex: 1 }}>

        <Navbar />

        <Box sx={{ p: 4 }}>
          {children}
        </Box>

      </Box>

    </Box>
  );
}