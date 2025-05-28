// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import Login from './pages/login';
import PaperViewer from './pages/paperviewer';

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/papers/*"
                        element={
                            <RequireAuth>
                                <PaperViewer />
                            </RequireAuth>
                        }
                    />
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
