import { Box, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function Logo() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mb={4}
    >
      <RocketLaunchIcon
        sx={{
          fontSize: 60,
          color: "#3f51ff",
          mb: 1
        }}
      />

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        TaskFlow Pro
      </Typography>

      <Typography
        color="text.secondary"
        mt={1}
      >
        Enterprise Task Management
      </Typography>
    </Box>
  );
}