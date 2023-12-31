import tsconfigPaths from 'vite-tsconfig-paths'
import type { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

function VitePluginBundlerKit(manifest: any): Plugin {
  return {
    name: 'plugin-bundler-kit',
    config(config, env) {
      return {
        ...config,
        define: {
          'process.env': process.env,
        },
        build: {
          emptyOutDir: true,
          lib: {
            entry: 'src/index.ts',
            name: manifest.metadata.name,
            formats: ['iife'],
            fileName: () => 'main.js',
          },
          rollupOptions: {
            external: [
              'vue',
              'vue-router',
              '@vueuse/core',
              '@vueuse/components',
              '@vueuse/router',
            ],
            output: {
              globals: {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                '@vueuse/core': 'VueUse',
                '@vueuse/components': 'VueUse',
                '@vueuse/router': 'VueUse',
              },
              extend: true,
            },
          },
        },
      }
    },
  }
}

export default {
  plugins: [
    vue(),
    vueJsx(),
    tsconfigPaths(),
    VitePluginBundlerKit({
      metadata: {
        name: 'hello',
      },
    }),
  ],
}
