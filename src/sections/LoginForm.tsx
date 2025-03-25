import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils/utils";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      const url = "http://localhost:4000/api/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...loginInfo }),
      });

      const result = await response.json();
      const { status, data } = result;

      if (status === "failed") {
        handleError(`${data}`);
      } else if (status === "success") {
        handleSuccess(`${data}`);
        setTimeout(() => {
          navigate("/");
        }, 1000);
        formRef.current?.reset();
        setLoginInfo({ email: "", password: "" });
      }
    } catch (error) {
      handleError("An error occurred during login");
      console.error("Login error:", error);
    }
  };
  return (
    <Box component="form" ref={formRef} onSubmit={handleFormSubmit} noValidate>
      <TextField
        margin="normal"
        onChange={handleChange}
        value={loginInfo.email}
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          },
        }}
        sx={{ mb: 2 }}
      />

      <TextField
        margin="normal"
        onChange={handleChange}
        value={loginInfo.password}
        required
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        id="password"
        autoComplete="current-password"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        sx={{ mb: 2 }}
      />

      {/* <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <MuiLink component={Link} to="/forgot-password" variant="body2">
          Forgot password?
        </MuiLink>
      </Box> */}

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 1,
          mb: 3,
          py: 1.5,
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
          "&:hover": {
            background: "linear-gradient(90deg, #5a6fd5 0%, #6a4292 100%)",
          },
        }}
      >
        Sign In
      </Button>

      <Divider sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          OR
        </Typography>
      </Divider>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body2">
          Don't have an account?{" "}
          <MuiLink component={Link} to="/register" fontWeight="medium">
            Sign up now
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
