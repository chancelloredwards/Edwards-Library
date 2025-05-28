// src/components/RequireAuth.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

export default function RequireAuth({ children }) {
    const user = useAuth();
    const location = useLocation();
    if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
    return children;
}
