import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'


export default defineConfig({
  plugins: [
    vue(), // Add the Vue plugin here
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'], // Import from Vue, Vue Router, Pinia
      dts: 'src/auto-imports.d.ts', // Create a TypeScript file for IntelliSense support
    })
    ,
    // Configuration for auto importing components in the project
    Components({
      // Auto import components used in the project
      dirs: ['src/components'],
      extensions: ['vue'],
      dts:'src/components.d.ts', // Create a TypeScript file for IntelliSense support 
    })
  ]
})
