import { defineConfig } from 'vite';

export default defineConfig({
    base: '/positivus/',
    build: {
        outDir: 'build',
        emptyOutDir: true,
    },
});
