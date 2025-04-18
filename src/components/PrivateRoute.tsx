import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "../data/types";
import { useEffect, useState } from "react";
import { logout } from "../store/authSlice";
import { API_URL, handleError } from "../utils/utils";
import { HomePath, LoginPath } from "../constants/constants";

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo = LoginPath,
}) => {
  const { isAuthenticated, token } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const [isVerifying, setIsVerifying] = useState<boolean>(true);

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        try {
          const response = await fetch(`${API_URL}/api/auth/verify`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            dispatch(logout());
            handleError("Session expired. Please login again");
          }
        } catch (error) {
          dispatch(logout());
          handleError("Authentication failed. Please login again");
        }
      } else if (!isAuthenticated) {
        handleError("Please login to continue");
      }
      setIsVerifying(false);
    };
    verifyToken();
  }, [token, dispatch]);

  if (isVerifying) {
    return null;
  }

  return isAuthenticated && token ? (
    <>{children}</>
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;

const AuthRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo = HomePath,
}) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return isAuthenticated ? <Navigate to={redirectTo} /> : <>{children}</>;
};

export { AuthRoute };
