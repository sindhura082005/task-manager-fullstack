import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";

import StatCard from "../../components/ui/StatCard";
import RecentTasks from "../../components/ui/RecentTasks";

export default function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#F5F7FB",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <Box
          sx={{
            flex: 1,
            p: 4,
            overflow: "auto",
          }}
        >
          {/* Welcome */}
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={4}
          >
            Welcome Back 👋
          </Typography>

          {/* Statistics */}
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard
                title="Total Tasks"
                value="24"
                icon="📋"
                color="#2563EB"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard
                title="Completed"
                value="18"
                icon="✅"
                color="#22C55E"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard
                title="Pending"
                value="4"
                icon="⏳"
                color="#F59E0B"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard
                title="Overdue"
                value="2"
                icon="🔥"
                color="#EF4444"
              />
            </Grid>
          </Grid>

          {/* Recent Tasks */}
          <RecentTasks />
        </Box>
      </Box>
    </Box>
  );
}