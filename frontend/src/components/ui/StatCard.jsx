import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

export default function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        transition: ".3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Typography color="gray">
            {title}
          </Typography>

          <Typography
            fontSize={35}
          >
            {icon}
          </Typography>
        </Box>

        <Typography
          variant="h3"
          fontWeight="bold"
          color={color}
          mt={2}
        >
          {value}
        </Typography>

      </CardContent>
    </Card>
  );
}