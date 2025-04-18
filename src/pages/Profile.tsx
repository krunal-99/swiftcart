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
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ProfileInfo from "../sections/ProfileInfo";
import OrderHistory from "../sections/OrderHistory";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import { logout } from "../store/authSlice";
import { LoginPath, ShopPath, WishlistPath } from "../constants/constants";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../utils/user";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const isMobile = useMediaQuery("(max-width:640px)");
  const { user } = useSelector((state: RootState) => state.auth);
  const { data: userData, isLoading } = useQuery({
    queryKey: ["user", user?.id],
    queryFn: () => getUserById(user?.id!),
    enabled: !!user?.id,
    staleTime: 30000,
    refetchOnMount: true,
  });

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    window.location.href = LoginPath;
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
          textDecoration: "none",
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
                src={userData?.imageUrl || user?.imageUrl}
                alt={userData?.name || user?.name}
                sx={{
                  width: 80,
                  height: 80,
                  border: "4px solid white",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                {(userData?.name || user?.name || "U").charAt(0)}
              </Avatar>
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
                    {userData?.name || user?.name}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }} mb={2}>
                    {userData?.email || user?.email}
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
          <ProfileInfo userData={userData} isLoading={isLoading} />
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
