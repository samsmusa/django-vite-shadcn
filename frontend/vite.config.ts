// import {defineConfig} from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
//
// export default defineConfig({
//     plugins: [react()],
//     build: {
//         manifest: true,
//         outDir: path.resolve(__dirname, '../static/js'),
//         rollupOptions: {
//             input: './src/index.tsx'
//         },
//         emptyOutDir: true,
//     }
// });
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        manifest: true,
        outDir: path.resolve(__dirname, '../static/js'),
        rollupOptions: {
            input: './src/main.tsx',
            output: {
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash].[ext]',
            },
        },
        emptyOutDir: true,
    },
    server: {
        port: 3000,
        open: true,
    },
});