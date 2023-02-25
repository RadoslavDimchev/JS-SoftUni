import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;