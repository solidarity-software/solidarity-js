import path from 'path';
import { defineConfig } from 'vite';

module.exports = defineConfig({
  build: {
    lib: {
      name: 'mike-ext',
      entry: {
        'mike-ext': path.resolve(__dirname, 'src/index.ts'),
        //'mike-ext-test': path.resolve(__dirname, 'test/index.ts'),
      },
      fileName: (format, entry) => `${entry}.${format}.js`,
      "formats": ["umd"]
    },
    rollupOptions: {
      external: ['vscode'],
    }
  }
});
