import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const user = false
    return user ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes