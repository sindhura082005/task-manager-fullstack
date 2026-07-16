import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
  Tooltip,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SearchBar from "../ui/SearchBar";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={1}
      color="inherit"
      sx={{
        borderBottom: "1px solid #e5e7eb",
        bgcolor: "background.paper",
      }}
    >
      <Toolbar>

        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            mr: 4,
          }}
        >
          🚀 TaskFlow Pro
        </Typography>

        {/* Search */}
        <Box sx={{ flexGrow: 1 }}>
          <SearchBar />
        </Box>

        {/* Notification */}
        <Tooltip title="Notifications">
          <IconButton sx={{ ml: 2 }}>
            <Badge badgeContent={4} color="error">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* Dark Mode */}
        <ThemeToggle />

        {/* Avatar */}
        <Tooltip title="Profile">
          <IconButton sx={{ ml: 2 }}>
            <Avatar
              sx={{
                bgcolor: "primary.main",
                width: 36,
                height: 36,
              }}
            >
              <AccountCircleIcon />
            </Avatar>
          </IconButton>
        </Tooltip>

      </Toolbar>
    </AppBar>
  );
}