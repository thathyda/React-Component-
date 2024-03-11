import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import as a named import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
