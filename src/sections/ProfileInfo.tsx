import { useState, useEffect } from "react";
import { ProfileInfoProps } from "../data/types";
import { handleError, handleSuccess } from "../utils/utils";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  Close,
  Edit,
  Save,
  Upload,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../main";
import ProfileInfoSkeleton from "./ProfileInfoSkeleton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfile } from "../utils/user";
import { login } from "../store/authSlice";

interface ExtendedProfileInfoProps extends ProfileInfoProps {
  isLoading?: boolean;
}

const compressImage = (
  base64String: string,
  maxWidth = 800
): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64String;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(base64String);
        return;
      }
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.7));
    };
    img.onerror = () => resolve(base64String);
  });
};

const ProfileInfo: React.FC<ExtendedProfileInfoProps> = ({
  userData,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState({
    name: userData?.name || "",
    email: userData?.email || "",
    password: "",
    confirmPassword: "",
    imageBase64: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        password: "",
        confirmPassword: "",
        imageBase64: "",
      });
      setImagePreview(userData.imageUrl || "");
    }
  }, [userData]);

  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>(
    userData?.imageUrl || ""
  );
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUploading, setIsUploading] = useState<Boolean>(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const token = localStorage.getItem("access_token") || "";
  const queryClient = useQueryClient();

  const updateProfileMutation = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (data) => {
      handleSuccess(data.data || "Profile updated successfully.");
      setEditMode(false);
      setFormData({
        ...formData,
        password: "",
        confirmPassword: "",
        imageBase64: "",
      });

      if (data.user) {
        dispatch(
          login({
            user: data.user,
            token: token,
          })
        );
      }

      queryClient.setQueryData(["user", user?.id], data.user);

      queryClient.invalidateQueries({ queryKey: ["user", user?.id] });
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.data ||
        "Failed to update profile. Please try again.";
      handleError(errorMessage);
    },
  });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        handleError("Image size should be less than 5MB");
        return;
      }
      setIsUploading(true);
      try {
        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);

        const reader = new FileReader();
        reader.onload = async () => {
          try {
            const base64String = reader.result as string;
            const compressedImage = await compressImage(base64String);
            const formattedBase64 = compressedImage.split(",")[1];

            const compressedSize = Math.round((formattedBase64.length * 3) / 4);
            if (compressedSize > 2 * 1024 * 1024) {
              handleError(
                "Image is too large after compression. Please choose a smaller image."
              );
              setIsUploading(false);
              setImagePreview(userData?.imageUrl || "");
              return;
            }
            setFormData((prev) => ({
              ...prev,
              imageBase64: formattedBase64,
            }));
          } catch (error) {
            console.error("Error processing image:", error);
            handleError("Failed to process image. Please try again.");
            setImagePreview(userData?.imageUrl || "");
          }
          setIsUploading(false);
        };
        reader.onerror = () => {
          handleError("Failed to read image file. Please try again.");
          setIsUploading(false);
          setImagePreview(userData?.imageUrl || "");
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error("Error handling image:", error);
        handleError("Failed to process image. Please try again.");
        setIsUploading(false);
        setImagePreview(userData?.imageUrl || "");
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (formData.password) {
      if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
        isValid = false;
      }

      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords don't match";
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const updateData: any = {
      name: formData.name,
      email: formData.email,
    };

    if (formData.password) {
      updateData.password = formData.password;
    }

    if (formData.imageBase64) {
      updateData.imageUrl = formData.imageBase64;
    }

    if (user?.id) {
      updateProfileMutation.mutate({
        userId: user.id,
        userData: updateData,
        token,
      });
    }
  };

  if (isLoading) {
    return <ProfileInfoSkeleton />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card
        sx={{
          marginBottom: 3,
          border: 1,
          borderColor: "grey.300",
          boxShadow: 1,
        }}
      >
        <CardContent sx={{ padding: 3 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="h6" fontWeight="medium">
              Personal Information
            </Typography>
            {!editMode ? (
              <Button
                type="button"
                variant="outlined"
                onClick={() => setEditMode(true)}
                startIcon={<Edit fontSize="small" />}
              >
                Edit Profile
              </Button>
            ) : (
              <Button
                type="button"
                variant="outlined"
                color="error"
                onClick={() => {
                  setEditMode(false);
                  setFormData({
                    name: userData?.name || "",
                    email: userData?.email || "",
                    password: "",
                    confirmPassword: "",
                    imageBase64: "",
                  });
                  setFormErrors({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                  });
                  setImagePreview(userData?.imageUrl || "");
                }}
                startIcon={<Close fontSize="small" />}
              >
                Cancel
              </Button>
            )}
          </Box>
          <Box mb={4} display="flex" flexDirection="column" alignItems="center">
            <Box position="relative">
              {imagePreview ? (
                <Avatar
                  src={imagePreview}
                  alt={formData.name}
                  sx={{ width: 120, height: 120, mb: 2 }}
                  imgProps={{
                    loading: "eager",
                    onError: (e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      setImagePreview("");
                    },
                  }}
                >
                  {formData.name.charAt(0)}
                </Avatar>
              ) : (
                <Avatar sx={{ width: 120, height: 120, mb: 2 }}>
                  {formData.name.charAt(0)}
                </Avatar>
              )}
              {isUploading && (
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ background: "rgba(255, 255, 255, 0.7)" }}
                >
                  <CircularProgress size={40} />
                </Box>
              )}
            </Box>
            {editMode && (
              <Button
                component="label"
                variant="outlined"
                startIcon={<Upload />}
                sx={{ marginTop: 1 }}
              >
                Upload Photo
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Button>
            )}
            <Typography
              variant="body2"
              sx={{ color: "grey.500", marginTop: 1 }}
            >
              {editMode
                ? "JPG, PNG or GIF (max. 5MB)"
                : userData?.name || user?.name || "Profile Picture"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="subtitle2" component="label" htmlFor="name">
                Full Name
              </Typography>
              <TextField
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={!editMode}
                variant="outlined"
                error={!!formErrors.name}
                helperText={formErrors.name}
                sx={{ backgroundColor: !editMode ? "grey.50" : "inherit" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="subtitle2" component="label" htmlFor="email">
                Email Address
              </Typography>
              <TextField
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={!editMode}
                variant="outlined"
                error={!!formErrors.email}
                helperText={formErrors.email}
                sx={{ backgroundColor: !editMode ? "grey.50" : "inherit" }}
              />
            </Box>
            {editMode && (
              <>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    variant="subtitle2"
                    component="label"
                    htmlFor="password"
                  >
                    New Password
                  </Typography>
                  <TextField
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    variant="outlined"
                    error={!!formErrors.password}
                    helperText={
                      formErrors.password ||
                      "Leave blank to keep current password"
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handlePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOff fontSize="small" />
                            ) : (
                              <Visibility fontSize="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    variant="subtitle2"
                    component="label"
                    htmlFor="confirmPassword"
                  >
                    Confirm New Password
                  </Typography>
                  <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    variant="outlined"
                    error={!!formErrors.confirmPassword}
                    helperText={formErrors.confirmPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm password visibility"
                            onClick={handleConfirmPasswordVisibility}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff fontSize="small" />
                            ) : (
                              <Visibility fontSize="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </>
            )}
          </Box>
          {editMode && (
            <Box mt={4} display="flex" justifyContent="flex-end">
              <Button
                type="submit"
                variant="contained"
                disabled={updateProfileMutation.isLoading}
                startIcon={
                  updateProfileMutation.isLoading ? (
                    <CircularProgress size={16} sx={{ color: "inherit" }} />
                  ) : (
                    <Save fontSize="small" />
                  )
                }
                sx={{
                  backgroundColor: "#667eea",
                  "&:hover": { backgroundColor: "#5a71d6" },
                }}
              >
                {updateProfileMutation.isLoading
                  ? "Saving Changes..."
                  : "Save Changes"}
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </form>
  );
};
export default ProfileInfo;
