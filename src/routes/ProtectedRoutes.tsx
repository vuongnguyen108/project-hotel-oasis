import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function ProtectedRoutes({
    children,
}: {
    children: React.ReactNode;
}) {
    const {token} = useAuthStore();
    if (!token) {
        return <Navigate to="/login" replace></Navigate>;
    }
    return children;
}
