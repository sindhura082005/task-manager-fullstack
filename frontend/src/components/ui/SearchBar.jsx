import {
  TextField,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <TextField
      size="small"
      placeholder="Search tasks..."
      sx={{
        width: 320,
        bgcolor: "background.default",
        borderRadius: 2,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}