import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteCompression(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  // resolve: {
  //   alias: {
  //     '@assets': `${path.resolve(__dirname, './src/assets/')}`,
  //     '@components': `${path.resolve(__dirname, './src/components/')}`,
  //     '@constants': `${path.resolve(__dirname, './src/constants/')}`,
  //     '@lib': `${path.resolve(__dirname, './src/lib/')}`,
  //     '@layouts': `${path.resolve(__dirname, './src/layouts/')}`,
  //     '@pages': `${path.resolve(__dirname, './src/pages/')}`,
  //     '@interfaces': `${path.resolve(__dirname, './src/interfaces/')}`,
  //     '@services': `${path.resolve(__dirname, './src/services/')}`,
  //     '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
  //     '@stores': `${path.resolve(__dirname, './src/stores/')}`,
  //     '@helpers': `${path.resolve(__dirname, './src/helpers/')}`,
  //   },
  // },
});
