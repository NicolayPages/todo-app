import react from '@vitejs/plugin-react';

import svgr from '@svgr/rollup';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/',
  plugins: [react(), tsconfigPaths(), svgr()],
});
