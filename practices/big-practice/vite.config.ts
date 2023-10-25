import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': `${path.resolve(__dirname, './src/assets/')}`,
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@constants': `${path.resolve(__dirname, './src/constants/')}`,
      '@lib': `${path.resolve(__dirname, './src/lib/')}`,
      '@layouts': `${path.resolve(__dirname, './src/layouts/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`,
      '@interfaces': `${path.resolve(__dirname, './src/interfaces/')}`,
      '@services': `${path.resolve(__dirname, './src/services/')}`,
      '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
    },
  },
});
