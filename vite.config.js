import { resolve } from 'path'

export default {
  css: {
    postcss: {
      config: './postcss.config.cjs'
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        screen: resolve(__dirname, 'screen.html')
      }
    }
  }
}
