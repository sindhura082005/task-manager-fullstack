import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
} from "@mui/material";

const tasks = [
  {
    title: "Build Login Page",
    priority: "High",
    due: "Today",
    status: "Pending",
  },
  {
    title: "Connect FastAPI",
    priority: "Medium",
    due: "Tomorrow",
    status: "Pending",
  },
  {
    title: "PostgreSQL Setup",
    priority: "High",
    due: "20 Jul",
    status: "Pending",
  },
  {
    title: "Deploy to AWS",
    priority: "Low",
    due: "25 Jul",
    status: "Completed",
  },
];

const priorityColor = {
  High: "error",
  Medium: "warning",
  Low: "success",
};

const statusColor = {
  Pending: "warning",
  Completed: "success",
};

export default function RecentTasks() {
  return (
    <Card
      sx={{
        mt: 5,
        borderRadius: 4,
      }}
    >
      <CardContent>

        <Typography
          variant="h5"
          fontWeight="bold"
          mb={3}
        >
          Recent Tasks
        </Typography>

        {tasks.map((task, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
              borderBottom:
                index !== tasks.length - 1
                  ? "1px solid #E5E7EB"
                  : "none",
            }}
          >
            <Typography fontWeight={500}>
              {task.title}
            </Typography>

            <Stack direction="row" spacing={1}>
              <Chip
                label={task.priority}
                color={priorityColor[task.priority]}
              />

              <Chip
                label={task.due}
                variant="outlined"
              />

              <Chip
                label={task.status}
                color={statusColor[task.status]}
              />
            </Stack>
          </Box>
        ))}

      </CardContent>
    </Card>
  );
}