import { Navigate, useLocation } from "react-router-dom";
import { ShopPath } from "../constants/constants";

interface PaymentRouteGuardProps {
  children: React.ReactNode;
}

const PaymentRouteGuard = ({ children }: PaymentRouteGuardProps) => {
  const location = useLocation();
  const sessionId = new URLSearchParams(location.search).get("session_id");

  if (!sessionId) {
    return <Navigate to={ShopPath} replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PaymentRouteGuard;
