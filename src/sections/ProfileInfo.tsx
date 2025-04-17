import { useState, useEffect } from "react";
import { ProfileInfoProps } from "../data/types";
import { getDefaultAddress, handleError, handleSuccess } from "../utils/utils";
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
  Add,
  Close,
  Edit,
  Save,
  Upload,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../main";
import ProfileInfoSkeleton from "./ProfileInfoSkeleton";

interface ExtendedProfileInfoProps extends ProfileInfoProps {
  isLoading?: boolean;
  onUserUpdate: (user: {
    id: number;
    name: string;
    email: string;
    imageUrl?: string;
  }) => void;
}

interface NoAddressProps {
  onAddAddress: () => void;
}

const NoAddress: React.FC<NoAddressProps> = ({ onAddAddress }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={4}
      sx={{ backgroundColor: "grey.50", borderRadius: 2 }}
    >
      <Typography variant="h6" color="text.secondary" mb={2}>
        No Address Available
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Please add your address to complete your profile.
      </Typography>
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={onAddAddress}
        sx={{
          backgroundColor: "#667eea",
          "&:hover": { backgroundColor: "#5a71d6" },
        }}
      >
        Add Address
      </Button>
    </Box>
  );
};

const ProfileInfo: React.FC<ExtendedProfileInfoProps> = ({
  userData,
  isLoading = false,
  onUserUpdate,
}) => {
  const displayAddress = getDefaultAddress(userData?.addresses);
  const hasAddress = userData?.addresses && userData.addresses.length > 0;
  const { user } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    name: userData?.name || "",
    email: userData?.email || "",
    password: "",
    confirmPassword: "",
    firstName: displayAddress?.firstName || "",
    lastName: displayAddress?.lastName || "",
    street: displayAddress?.streetAddress || "",
    city: displayAddress?.city || "",
    state: displayAddress?.state || "",
    pincode: displayAddress?.pincode || "",
    country: displayAddress?.country || "India",
    userId: user?.id || 0,
  });

  useEffect(() => {
    console.log("LocalStorage user:", localStorage.getItem("user"));
    console.log("User from Redux:", user);
    if (userData) {
      const address = getDefaultAddress(userData.addresses);
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        password: "",
        confirmPassword: "",
        firstName: address?.firstName || "",
        lastName: address?.lastName || "",
        street: address?.streetAddress || "",
        city: address?.city || "",
        state: address?.state || "",
        pincode: address?.pincode || "",
        country: address?.country || "India",
        userId: user?.id!,
      });
    }
  }, [userData]);

  const [editMode, setEditMode] = useState(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(
    userData?.imageUrl || ""
  );
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUploading, setIsUploading] = useState<Boolean>(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      setImageFile(file);
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
    console.log("Input changed:", name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password && formData.password !== formData.confirmPassword) {
      handleError("Passwords don't match.");
      return;
    }
    if (!formData.userId) {
      handleError("User ID is missing.");
      return;
    }
    if (formData.name && !/^[a-zA-Z\s]+$/.test(formData.name)) {
      handleError("Name must contain only letters and spaces.");
      return;
    }
    if (
      (formData.street ||
        formData.city ||
        formData.state ||
        formData.pincode ||
        formData.country) &&
      (!formData.firstName || !formData.lastName)
    ) {
      handleError("First name and last name are required for address.");
      return;
    }
    setIsSaving(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("userId", formData.userId.toString());
      if (formData.name !== userData?.name)
        formDataToSend.append("name", formData.name);
      if (formData.email !== userData?.email)
        formDataToSend.append("email", formData.email);
      if (formData.password)
        formDataToSend.append("password", formData.password);
      if (formData.street) formDataToSend.append("street", formData.street);
      if (formData.city) formDataToSend.append("city", formData.city);
      if (formData.state) formDataToSend.append("state", formData.state);
      if (formData.pincode) formDataToSend.append("pincode", formData.pincode);
      if (formData.country) formDataToSend.append("country", formData.country);
      if (imageFile) {
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        await new Promise((resolve) => {
          reader.onload = () => {
            formDataToSend.append("image", reader.result as string);
            resolve(null);
          };
        });
      }

      const formDataEntries = Object.fromEntries(formDataToSend);
      console.log("FormData payload:", formDataEntries);

      const response = await fetch("http://localhost:4000/api/auth/update", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: formDataToSend,
      });
      const data = await response.json();
      console.log("Response:", data);
      if (response.ok && data.status === "success") {
        onUserUpdate(data.user);
        localStorage.setItem("access_token", data.token);
        handleSuccess("Profile updated successfully.");
        setEditMode(false);
        setImageFile(null);
      } else {
        throw new Error(data.data || "Failed to update profile.");
      }
    } catch (error) {
      handleError("Failed to update profile.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddAddress = () => {
    setEditMode(true);
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
                  setImagePreview(userData.imageUrl || "");
                  setImageFile(null);
                  setFormData({
                    name: userData?.name || "",
                    email: userData?.email || "",
                    password: "",
                    confirmPassword: "",
                    firstName: displayAddress?.firstName || "",
                    lastName: displayAddress?.lastName || "",
                    street: displayAddress?.streetAddress || "",
                    city: displayAddress?.city || "",
                    state: displayAddress?.state || "",
                    pincode: displayAddress?.pincode || "",
                    country: displayAddress?.country || "India",
                    userId: user?.id || 0,
                  });
                  setEditMode(false);
                }}
                startIcon={<Close fontSize="small" />}
              >
                Cancel
              </Button>
            )}
          </Box>
          <Box mb={4} display="flex" flexDirection="column" alignItems="center">
            <Box position="relative">
              <Avatar
                src={imagePreview || userData?.imageUrl}
                alt={formData.name}
                sx={{ width: 120, height: 120, mb: 2 }}
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
              {editMode
                ? "JPG, PNG or GIF (max. 2MB)"
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
            {hasAddress && (
              <Typography
                variant="caption"
                component="span"
                sx={{ ml: 1, color: "text.secondary" }}
              >
                {displayAddress?.isDefault ? "(Default Address)" : ""}
              </Typography>
            )}
          </Typography>
          {hasAddress || editMode ? (
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
                <Typography
                  variant="subtitle2"
                  component="label"
                  htmlFor="city"
                >
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
                <Typography
                  variant="subtitle2"
                  component="label"
                  htmlFor="state"
                >
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
          ) : (
            <NoAddress onAddAddress={handleAddAddress} />
          )}
          {editMode && (
            <Box mt={4} display="flex" justifyContent="flex-end">
              <Button
                type="submit"
                variant="contained"
                disabled={
                  isSaving ||
                  (!!formData.password &&
                    formData.password !== formData.confirmPassword)
                }
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
