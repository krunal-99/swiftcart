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
  CircularProgress,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils/utils";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const { email, password } = loginInfo;

    if (!email || !password) {
      handleError("All fields are required");
      setIsLoading(false);
      return;
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

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const result = await response.json();

      if (result.status === "failed") {
        handleError(`${result.data}`);
      } else {
        handleSuccess(`${result.data}`);
        dispatch(login({ user: result.user, token: result.token }));
        navigate("/", { replace: true });
        formRef.current?.reset();
        setLoginInfo({ email: "", password: "" });
      }
    } catch (error) {
      handleError("An error occurred during login");
      console.error("Login error:", error);
    }
    setIsLoading(false);
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

      <Button
        disabled={isLoading}
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
        {isLoading ? (
          <CircularProgress sx={{ color: "white" }} size="30px" />
        ) : (
          "Sign In"
        )}
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
