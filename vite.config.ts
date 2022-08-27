import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import yamlPlugin from "@modyfi/vite-plugin-yaml";

export default defineConfig({
  plugins: [solidPlugin(), yamlPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
