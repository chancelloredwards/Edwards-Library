import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthCtx = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, u => {
            setUser(u);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    if (loading) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading…</p>;
    return <AuthCtx.Provider value={user}>{children}</AuthCtx.Provider>;
};

export const useAuth = () => useContext(AuthCtx);
