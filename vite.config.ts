import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables" as *;\n@use "@/styles/mixins" as *;\n`,
      },
    },
  },
  // 멀티 페이지: 메인 포트폴리오 + 랜딩페이지 5종 + 케이스 스터디 5종
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        siteA: fileURLToPath(new URL('./sites/a/index.html', import.meta.url)),
        siteB: fileURLToPath(new URL('./sites/b/index.html', import.meta.url)),
        siteC: fileURLToPath(new URL('./sites/c/index.html', import.meta.url)),
        siteD: fileURLToPath(new URL('./sites/d/index.html', import.meta.url)),
        siteE: fileURLToPath(new URL('./sites/e/index.html', import.meta.url)),
        caseA: fileURLToPath(new URL('./case/a/index.html', import.meta.url)),
        caseB: fileURLToPath(new URL('./case/b/index.html', import.meta.url)),
        caseC: fileURLToPath(new URL('./case/c/index.html', import.meta.url)),
        caseD: fileURLToPath(new URL('./case/d/index.html', import.meta.url)),
        caseE: fileURLToPath(new URL('./case/e/index.html', import.meta.url)),
      },
    },
  },
})
