import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  allowedRole: "user" | "driver";
}

function ProtectedRoute({ children, allowedRole }: Props) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!token) return <Navigate to="/login" replace />;
  if (user.roles !== allowedRole) {
    return (
      <Navigate
        to={user.roles === "driver" ? "/dashboard/driver" : "/dashboard"}
        replace
      />
    );
  }

  return <>{children}</>;
}

export default ProtectedRoute;
