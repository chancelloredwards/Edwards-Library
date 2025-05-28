// 🛠️ Fix: correct import paths (Home.jsx, PaperViewer.jsx)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import RequireAuth from './components/RequireAuth';

// pages
import Home from './pages/Home.jsx';
import PaperViewer from './pages/paperviewer.jsx';

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

