import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [err, setErr] = useState('');
    const nav = useNavigate();
    const { state } = useLocation();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, pwd);
            nav(state?.from?.pathname || '/papers');
        } catch (e) {
            setErr(e.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: '5rem auto' }}>
            <h1>Sign In</h1>
            <input
                type="email" placeholder="Email" value={email}
                onChange={e => setEmail(e.target.value)} required style={{ width: '100%', margin: '8px 0' }}
            />
            <input
                type="password" placeholder="Password" value={pwd}
                onChange={e => setPwd(e.target.value)} required style={{ width: '100%', margin: '8px 0' }}
            />
            <button style={{ width: '100%', padding: 8 }}>Login</button>
            {err && <p style={{ color: 'crimson' }}>{err}</p>}
        </form>
    );
}
