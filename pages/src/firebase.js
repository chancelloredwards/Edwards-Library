// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

// 1️⃣  Config values come from .env (must start with VITE_)
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// 2️⃣  Initialize core services
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 3️⃣  Initialize Analytics only if the browser supports it
export let analytics = null;
isSupported()
    .then(ok => { if (ok) analytics = getAnalytics(app); })
    .catch(() => {/* ignore—analytics optional */ });
