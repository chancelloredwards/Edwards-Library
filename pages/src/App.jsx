import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import RequireAuth from './components/RequireAuth';
import Login from './pages/Login';
import PaperViewer from './pages/PaperViewer';

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Public route */}
                    <Route path="/login" element={<Login />} />

                    {/* Protected route – only visible to signed‑in users */}
                    <Route
                        path="/papers/*"
                        element={
                            <RequireAuth>
                                <PaperViewer />
                            </RequireAuth>
                        }
                    />

                    {/* Fallback: redirect all unknown paths to login */}
                    <Route path="*" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}