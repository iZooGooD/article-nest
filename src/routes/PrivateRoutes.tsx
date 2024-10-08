import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "src/contexts/AuthContext";

const PrivateRoutes: React.FC = () => {
  const { state } = useAuth();
  return state.isAuthenticated ? <Outlet /> : <Navigate to="/members" />;
};

export default PrivateRoutes;
