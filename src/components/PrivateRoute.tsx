import { useSelector } from "react-redux";
import { RootState } from "../main";
import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "../data/types";

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo = "/login",
}) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return isAuthenticated ? <>{children}</> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

const AuthRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo = "/",
}) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return isAuthenticated ? <Navigate to={redirectTo} /> : <>{children}</>;
};

export { AuthRoute };
