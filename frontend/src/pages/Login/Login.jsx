import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  IconButton,
  Link
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import Logo from "../../components/common/Logo";
import PrimaryButton from "../../components/common/Button";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // Navigation object
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#4F46E5,#2563EB,#7C3AED)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: 500,
          p: 5,
          borderRadius: 5,
          backdropFilter: "blur(20px)"
        }}
      >
        <Logo />

        <Typography
          variant="h4"
          textAlign="center"
          mb={4}
        >
          Welcome Back 👋
        </Typography>

        {/* Email */}

        <Box mb={2}>
          <Typography mb={1}>Email</Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <EmailIcon sx={{ mr: 1 }} />

            <input
              style={{
                width: "100%",
                padding: 14,
                borderRadius: 10,
                border: "1px solid #ccc"
              }}
              placeholder="Enter Email"
            />
          </Box>
        </Box>

        {/* Password */}

        <Box>
          <Typography mb={1}>Password</Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <LockIcon sx={{ mr: 1 }} />

            <input
              type={showPassword ? "text" : "password"}
              style={{
                width: "100%",
                padding: 14,
                borderRadius: 10,
                border: "1px solid #ccc"
              }}
              placeholder="Enter Password"
            />

            <IconButton
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <VisibilityOff />
              ) : (
                <Visibility />
              )}
            </IconButton>
          </Box>
        </Box>

        <FormControlLabel
          control={<Checkbox />}
          label="Remember Me"
          sx={{ mt: 2 }}
        />

        {/* Login Button */}

        <PrimaryButton
          onClick={() => navigate("/dashboard")}
        >
          Sign In →
        </PrimaryButton>

        <Typography
          textAlign="center"
          mt={2}
        >
          <Link href="#">
            Forgot Password?
          </Link>
        </Typography>

        <Typography
          mt={4}
          textAlign="center"
        >
          Don't have an account?

          <Link
            component={RouterLink}
            to="/register"
            sx={{ ml: 1 }}
          >
            Register Here
          </Link>
        </Typography>

        <Typography
          mt={5}
          textAlign="center"
          color="gray"
        >
          © 2026 TaskFlow Pro
        </Typography>
      </Paper>
    </Box>
  );
}