import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  Divider,
  Link as MuiLink,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { registerFormFields } from "../data/data";

export const iconMap: { [key: string]: React.ElementType } = {
  username: AccountCircleIcon,
  email: EmailIcon,
};
const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box component="form" noValidate>
      {registerFormFields.map((field) => (
        <TextField
          margin="normal"
          required
          fullWidth
          id={field.id}
          label={field.id.slice(0, 1).toUpperCase() + field.id.slice(1)}
          name={field.id}
          autoComplete={field.id}
          autoFocus
          slotProps={{
            input: {
              startAdornment: iconMap[field.id] ? (
                <InputAdornment position="start">
                  {React.createElement(iconMap[field.id])}
                </InputAdornment>
              ) : null,
            },
          }}
          sx={{ mb: 2 }}
        />
      ))}

      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        id="password"
        autoComplete="new-password"
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

      <FormControlLabel
        control={<Checkbox color="primary" />}
        label={
          <Typography variant="body2">
            I agree to the Terms of Service and Privacy Policy
          </Typography>
        }
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 3,
          py: 1.5,
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
          "&:hover": {
            background: "linear-gradient(90deg, #5a6fd5 0%, #6a4292 100%)",
          },
        }}
      >
        Create Account
      </Button>

      <Divider sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          OR
        </Typography>
      </Divider>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body2">
          Already have an account?{" "}
          <MuiLink component={Link} to="/login" fontWeight="medium">
            Sign in
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterForm;
