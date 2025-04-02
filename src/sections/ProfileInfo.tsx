import { useState } from "react";
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

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: "",
    confirmPassword: "",
    street: user.address?.street || "",
    city: user.address?.city || "",
    state: user.address?.state || "",
    pincode: user.address?.pincode || "",
    country: user.address?.country || "India",
  });
  const [editMode, setEditMode] = useState(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>(user.imageUrl);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUploading, setIsUploading] = useState<Boolean>(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password && formData.password !== formData.confirmPassword) {
      handleError("Passwords don't match.");
      return;
    }
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      handleSuccess("Profile updated successfully.");
    }, 1500);
  };
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
                onClick={() => setEditMode(false)}
                startIcon={<Close fontSize="small" />}
              >
                Cancel
              </Button>
            )}
          </Box>
          <Box mb={4} display="flex" flexDirection="column" alignItems="center">
            <Box position="relative">
              <Avatar
                src={imagePreview}
                alt={formData.name}
                sx={{ width: 96, height: 96, marginBottom: 2 }}
              >
                {formData.name.charAt(0)}
              </Avatar>
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
                >
                  <CircularProgress size={20} />
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
              {editMode ? "JPG, PNG or GIF (max. 2MB)" : "Profile Picture"}
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
                    helperText="Leave blank to keep current password"
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
          <Typography variant="h6" fontWeight="medium" mt={4} mb={2}>
            Address Information
          </Typography>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
            gap={2}
          >
            <Box
              display="flex"
              flexDirection="column"
              gap={1}
              gridColumn={{ md: "span 2" }}
            >
              <Typography
                variant="subtitle2"
                component="label"
                htmlFor="street"
              >
                Street Address
              </Typography>
              <TextField
                id="street"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
                disabled={!editMode}
                variant="outlined"
                multiline
                rows={2}
                sx={{ backgroundColor: !editMode ? "grey.50" : "inherit" }}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography variant="subtitle2" component="label" htmlFor="city">
                City
              </Typography>
              <TextField
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                disabled={!editMode}
                variant="outlined"
                sx={{ backgroundColor: !editMode ? "grey.50" : "inherit" }}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography variant="subtitle2" component="label" htmlFor="state">
                State
              </Typography>
              <TextField
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                disabled={!editMode}
                variant="outlined"
                sx={{ backgroundColor: !editMode ? "grey.50" : "inherit" }}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography
                variant="subtitle2"
                component="label"
                htmlFor="pincode"
              >
                Pin Code
              </Typography>
              <TextField
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                disabled={!editMode}
                variant="outlined"
                sx={{ backgroundColor: !editMode ? "grey.50" : "inherit" }}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography
                variant="subtitle2"
                component="label"
                htmlFor="country"
              >
                Country
              </Typography>
              <TextField
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                disabled={!editMode}
                variant="outlined"
                sx={{ backgroundColor: !editMode ? "grey.50" : "inherit" }}
              />
            </Box>
          </Box>
          {editMode && (
            <Box mt={4} display="flex" justifyContent="flex-end">
              <Button
                type="submit"
                variant="contained"
                disabled={isSaving}
                startIcon={
                  isSaving ? (
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
                {isSaving ? "Saving Changes..." : "Save Changes"}
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </form>
  );
};

export default ProfileInfo;
