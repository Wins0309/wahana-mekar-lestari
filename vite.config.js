import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        viteImagemin({
            // Compress JPEG images to 60% quality
            mozjpeg: {
                quality: 60,
                progressive: true
            },
            // Compress PNG images (60% roughly corresponds to quality level 6-7)
            pngquant: {
                quality: [0.55, 0.65], // 55-65% quality range
                speed: 4
            },
            // Optimize SVG files
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox',
                        active: false
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false
                    }
                ]
            },
            // Compress WebP images to 60% quality
            webp: {
                quality: 60
            },
            // Compress AVIF images to 60% quality
            avif: {
                quality: 60
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
