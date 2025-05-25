import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Load .env.production when building on CI (mode=production)
    // eslint-disable-next-line no-undef
    const env = loadEnv(mode, process.cwd(), 'VITE_');
    return {
        plugins: [react()],
        base: '/Edwards-Library/',     // adjust if repo name includes dash
        define: {
            __VITE_ENV: env           // optional debugging
        }
    };
});
