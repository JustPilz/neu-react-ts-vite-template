import type { Plugin, ResolvedConfig } from 'vite';

import { defineConfig } from 'vite';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
import path from 'node:path';
import react from '@vitejs/plugin-react-swc';

const _dirname = dirname(fileURLToPath(import.meta.url));

const neutralino = (): Plugin => {
  let config: ResolvedConfig;

  return {
    name: 'neutralino',

    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },

    async transformIndexHtml(html) {
      const regex =
        /<script src="http:\/\/localhost:(\d+)\/__neutralino_globals\.js"><\/script>/;

      if (config.mode === 'production') {
        return html.replace(
          regex,
          '<script src="%PUBLIC_URL%/__neutralino_globals.js"></script>'
        );
      }

      if (config.mode === 'development') {
        const auth_info_file = await fs.readFile(
          path.join(_dirname, '..', '.tmp', 'auth_info.json'),
          {
            encoding: 'utf-8',
          }
        );

        const auth_info = JSON.parse(auth_info_file);
        const port = auth_info.port;

        return html.replace(
          regex,
          `<script src="http://localhost:${port}/__neutralino_globals.js"></script>`
        );
      }

      return html;
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), neutralino()],
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: 'build',
  },
});
