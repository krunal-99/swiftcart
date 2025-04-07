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
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { handleSuccess } from "../utils/utils";
import ProfileInfo from "../sections/ProfileInfo";
import OrderHistory from "../sections/OrderHistory";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import { logout } from "../store/authSlice";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const isMobile = useMediaQuery("(max-width:640px)");

  const userData = {
    name: "Krunal Pokar",
    email: "kp488680@gmail.com",
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.8fxewAh6BCz4IZBW0kbaVQHaEK&pid=Api&P=0&h=220",
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    window.location.href = "/login";
  };

  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: "100vh", mt: "60px" }}>
      <NavLink
        to="/"
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
            <Box color="white" textAlign={{ xs: "center", sm: "left" }}>
              <Typography variant="h4" fontWeight="bold" mb={1}>
                {user?.name}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }} mb={2}>
                {user?.email}
              </Typography>
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
            ></Tab>
            <Tab
              icon={<ShoppingBag sx={{ marginRight: 1 }} fontSize="small" />}
              label="Order History"
              iconPosition="start"
            ></Tab>
          </Tabs>
        </Box>
      </Box>
      <div role="tabpanel" hidden={activeTab !== 0}>
        {activeTab === 0 && <ProfileInfo userData={userData} />}
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
            to="/wishlist"
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
