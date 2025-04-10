import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  Divider,
  Link as MuiLink,
  IconButton,
  Avatar,
  Fade,
  CircularProgress,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Link, useNavigate } from "react-router-dom";
import { registerFormFields } from "../data/data";
import { handleError, handleSuccess } from "../utils/utils";
import { LoginPath } from "../constants/constants";

export const iconMap: { [key: string]: React.ElementType } = {
  name: AccountCircleIcon,
  email: EmailIcon,
};

const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const uploadImageToCloudinary = async (file: File) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "swiftcart");
    data.append("cloud_name", "dq0x26dcc");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dq0x26dcc/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const result = await res.json();
    return result.url;
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, password } = userInfo;

    if (!name || !email || !password) {
      return handleError("All fields are required");
    }

    if (!selectedFile) {
      return handleError("Please select an image");
    }

    try {
      setIsLoading(true);
      const imageUrl = await uploadImageToCloudinary(selectedFile);

      const url = "http://localhost:4000/api/auth/register";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userInfo, imageUrl }),
      });

      const result = await response.json();
      const { status, data } = result;

      if (status === "failed") {
        handleError(`${data}`);
      } else if (status === "success") {
        handleSuccess(`${data}`);
        navigate(LoginPath);
        formRef.current?.reset();
        setUserInfo({ name: "", email: "", password: "" });
        setImagePreview(null);
        setSelectedFile(null);
      }
    } catch (error) {
      handleError("An error occurred during registration");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box component="form" ref={formRef} noValidate onSubmit={handleFormSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "relative",
              width: 100,
              height: 100,
              borderRadius: "50%",
              overflow: "hidden",
              transition: "opacity 0.3s ease-in-out",
              opacity: isLoading ? 0.7 : 1,
            }}
          >
            <Avatar
              src={imagePreview || undefined}
              sx={{
                width: "100%",
                height: "100%",
                mb: 2,
                bgcolor: "grey.200",
              }}
            >
              {!imagePreview && (
                <AccountCircleIcon sx={{ width: 60, height: 60 }} />
              )}
            </Avatar>
            <Fade in={isLoading}>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(0, 0, 0, 0.3)",
                }}
              >
                <CircularProgress size={40} sx={{ color: "common.white" }} />
              </Box>
            </Fade>
          </Box>

          <IconButton
            component="label"
            disabled={isLoading}
            sx={{
              position: "absolute",
              bottom: 10,
              right: -10,
              bgcolor: "primary.main",
              color: "white",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
              disabled={isLoading}
            />
            <AddAPhotoIcon />
          </IconButton>
        </Box>
      </Box>

      {registerFormFields.map((field, idx) => (
        <TextField
          key={field.id}
          margin="normal"
          onChange={handleChange}
          value={userInfo[field.id as keyof typeof userInfo]}
          required
          fullWidth
          id={field.id}
          label={field.id.charAt(0).toUpperCase() + field.id.slice(1)}
          name={field.id}
          autoComplete={field.id}
          autoFocus={idx === 0}
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
        onChange={handleChange}
        value={userInfo.password}
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
        {isLoading ? (
          <CircularProgress sx={{ color: "white" }} size="30px" />
        ) : (
          "Create Account"
        )}
      </Button>

      <Divider sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          OR
        </Typography>
      </Divider>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body2">
          Already have an account?{" "}
          <MuiLink component={Link} to={LoginPath} fontWeight="medium">
            Sign in
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterForm;
