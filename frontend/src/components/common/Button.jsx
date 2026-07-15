import { Button } from "@mui/material";

export default function PrimaryButton({
  children,
  ...props
}) {
  return (
    <Button
      variant="contained"
      fullWidth
      size="large"
      sx={{
        mt: 2,
        py: 1.6,
        borderRadius: 3,
        fontWeight: "bold",
        textTransform: "none",
        fontSize: 18,
        boxShadow: 5,

        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: 8
        }
      }}
      {...props}
    >
      {children}
    </Button>
  );
}