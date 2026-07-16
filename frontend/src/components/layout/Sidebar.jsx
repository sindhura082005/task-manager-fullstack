import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Task";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link as RouterLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#0F172A",
        color: "white",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        borderRight: "1px solid #1E293B",
      }}
    >
      {/* Logo */}

      <Box
        sx={{
          p: 3,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
        >
          🚀 TaskFlow
        </Typography>

        <Typography
          variant="body2"
          color="gray"
        >
          Enterprise
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: "#334155" }} />

      <List sx={{ mt: 2 }}>

        <ListItemButton
          component={RouterLink}
          to="/dashboard"
          selected
          sx={{
            color: "white",
            borderRadius: 2,
            mx: 1,
            mb: 1,

            "&.Mui-selected": {
              bgcolor: "#2563EB",
            },

            "&:hover": {
              bgcolor: "#1D4ED8",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          component={RouterLink}
          to="/tasks"
          sx={{
            color: "white",
            borderRadius: 2,
            mx: 1,
            mb: 1,

            "&:hover": {
              bgcolor: "#1D4ED8",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <TaskIcon />
          </ListItemIcon>

          <ListItemText primary="Tasks" />
        </ListItemButton>

        <ListItemButton
          component={RouterLink}
          to="/profile"
          sx={{
            color: "white",
            borderRadius: 2,
            mx: 1,
            mb: 1,

            "&:hover": {
              bgcolor: "#1D4ED8",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <PersonIcon />
          </ListItemIcon>

          <ListItemText primary="Profile" />
        </ListItemButton>

        <ListItemButton
          sx={{
            color: "white",
            borderRadius: 2,
            mx: 1,

            "&:hover": {
              bgcolor: "#1D4ED8",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <SettingsIcon />
          </ListItemIcon>

          <ListItemText primary="Settings" />
        </ListItemButton>

      </List>

      <Box flexGrow={1} />

      <Divider sx={{ bgcolor: "#334155" }} />

      <List>

        <ListItemButton
          component={RouterLink}
          to="/"
          sx={{
            color: "white",
            borderRadius: 2,
            mx: 1,
            my: 2,

            "&:hover": {
              bgcolor: "#DC2626",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </ListItemButton>

      </List>

    </Box>
  );
}