// src/pages/Profile.tsx
import {
  ChevronLeft,
  Favorite,
  Logout,
  ShoppingBag,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Skeleton,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ProfileInfo from "../sections/ProfileInfo";
import OrderHistory from "../sections/OrderHistory";
import { LoginPath, ShopPath, WishlistPath } from "../constants/constants";
import { useQuery } from "@tanstack/react-query";

const fetchUserById = async (id: number) => {
  const response = await fetch(`http://localhost:4000/api/auth/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  if (!response.ok) throw new Error("Failed to fetch user");
  const data = await response.json();
  return data.data;
};

const Profile = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<number>(0);
  const isMobile = useMediaQuery("(max-width:640px)");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const { data: userData, isLoading } = useQuery({
    queryKey: ["user", user?.id],
    queryFn: () => fetchUserById(user?.id!),
    enabled: !!user?.id,
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    if (tabParam === "orders") {
      setActiveTab(1);
    }
  }, [location.search]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = LoginPath;
  };

  const handleUserUpdate = (updatedUser: {
    id: number;
    name: string;
    email: string;
    imageUrl?: string;
  }) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: "100vh", mt: "60px" }}>
      <NavLink
        to={ShopPath}
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          color: "#252b42",
          textDecoration: "none={>none",
        }}
      >
        <ChevronLeft sx={{ width: 20, height: 20, mr: 1 }} />
        <span>Continue Shopping</span>
      </NavLink>
      <Card sx={{ my: 2, overflow: "hidden", border: "none" }}>
        <Box
          sx={{
            background: "linear-gradient(to right, #667eea, #764ba2)",
            padding: { xs: 3, sm: 4 },
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "center", sm: "flex-start" }}
            gap={2}
          >
            {isLoading ? (
              <Skeleton
                variant="circular"
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "rgba(255,255,255,0.3)",
                }}
              />
            ) : (
              <Avatar
                src={user?.imageUrl}
                alt={user?.name}
                sx={{
                  width: 80,
                  height: 80,
                  border: "4px solid white",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              />
            )}
            <Box color="white" textAlign={{ xs: "center", sm: "left" }}>
              {isLoading ? (
                <>
                  <Skeleton
                    variant="text"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.3)",
                      fontSize: "2.125rem",
                      width: 200,
                      mb: 1,
                    }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.3)",
                      fontSize: "1rem",
                      width: 160,
                      mb: 2,
                    }}
                  />
                </>
              ) : (
                <>
                  <Typography variant="h4" fontWeight="bold" mb={1}>
                    {user?.name}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }} mb={2}>
                    {user?.email}
                  </Typography>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Card>
      <Box width="100%" mb={3}>
        <Box borderBottom={1} borderColor="divider">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant={isMobile ? "scrollable" : "fullWidth"}
            scrollButtons="auto"
            aria-label="profile tabs"
          >
            <Tab
              icon={<PersonIcon sx={{ marginRight: 1 }} fontSize="small" />}
              label="Personal Info"
              iconPosition="start"
            />
            <Tab
              icon={<ShoppingBag sx={{ marginRight: 1 }} fontSize="small" />}
              label="Order History"
              iconPosition="start"
            />
          </Tabs>
        </Box>
      </Box>
      <div role="tabpanel" hidden={activeTab !== 0}>
        {activeTab === 0 && (
          <ProfileInfo
            userData={userData}
            isLoading={isLoading}
            onUserUpdate={handleUserUpdate}
          />
        )}
      </div>
      <div role="tabpanel" hidden={activeTab !== 1}>
        {activeTab === 1 && <OrderHistory />}
      </div>

      <Box
        marginTop={5}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Box display="flex" gap={2}>
          <Button
            component={Link}
            variant="outlined"
            startIcon={<Favorite fontSize="small" />}
            to={WishlistPath}
            sx={{ whiteSpace: "nowrap" }}
          >
            My Wishlist
          </Button>
        </Box>
        <Button
          variant="contained"
          color="error"
          startIcon={<Logout fontSize="small" />}
          onClick={handleLogout}
          sx={{
            backgroundColor: "#ef5350",
            "&:hover": {
              backgroundColor: "#e53935",
            },
          }}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
