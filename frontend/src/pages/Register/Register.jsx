import {
  TextField,
  Button,
  Typography,
  Stack,
  Link,
} from "@mui/material";

import AuthLayout from "../../components/layout/AuthLayout";
import AuthCard from "../../components/common/AuthCard";
import Logo from "../../components/common/Logo";

export default function Register() {
  return (
    <AuthLayout>
      <AuthCard>

        <Logo />

        <Typography
          variant="h5"
          align="center"
          mb={3}
        >
          Create Account
        </Typography>

        <Stack spacing={3}>

          <TextField
            fullWidth
            label="Full Name"
          />

          <TextField
            fullWidth
            label="Email"
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
          />

          <TextField
            fullWidth
            type="password"
            label="Confirm Password"
          />

          <Button
            fullWidth
            size="large"
            variant="contained"
          >
            Register
          </Button>

          <Typography align="center">
            Already have an account?{" "}
            <Link href="/">
              Login
            </Link>
          </Typography>

        </Stack>

      </AuthCard>
    </AuthLayout>
  );
}