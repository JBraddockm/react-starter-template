/// <reference types="vite/client" />
/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	base: './',
	plugins: [react(), viteTsconfigPaths()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/tests/setup-tests.ts',
	},
});
