import {
  TextField,
  InputAdornment
} from "@mui/material";

export default function InputField({
  icon,
  ...props
}) {
  return (
    <TextField
      fullWidth
      margin="normal"
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        )
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 3
        }
      }}
      {...props}
    />
  );
}