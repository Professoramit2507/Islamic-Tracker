import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import https from 'node:https'

// Bangla Natural Voice Proxy Plugin
function banglaTtsPlugin() {
  const handler = (req, res) => {
    try {
      const urlObj = new URL(req.url, 'http://localhost');
      const text = urlObj.searchParams.get('text') || '';
      if (!text) {
        res.statusCode = 400;
        res.end('Missing text parameter');
        return;
      }

      const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
        text
      )}&tl=bn&client=tw-ob`;

      const proxyReq = https.get(
        googleTtsUrl,
        {
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            Accept: '*/*',
          },
        },
        (proxyRes) => {
          res.statusCode = proxyRes.statusCode || 200;
          res.setHeader('Content-Type', 'audio/mpeg');
          res.setHeader('Cache-Control', 'public, max-age=86400');
          res.setHeader('Access-Control-Allow-Origin', '*');
          proxyRes.pipe(res);
        }
      );

      proxyReq.on('error', (err) => {
        console.error('TTS Proxy Error:', err);
        res.statusCode = 500;
        res.end(err.message);
      });
    } catch (e) {
      res.statusCode = 500;
      res.end(e.message);
    }
  };

  return {
    name: 'bangla-tts-proxy',
    configureServer(server) {
      server.middlewares.use('/api/tts', handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/tts', handler);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), banglaTtsPlugin()],
})
