import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function ProtectedRoutes({
    children,
}: {
    children: React.ReactNode;
}) {
    const {token} = useAuthStore();
    if (token) {
        return <Navigate to="/" replace />;
    }
    return children;
}
