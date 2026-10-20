import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Runs the Netlify function locally during `npm run dev`
const devApiPlugin = (): Plugin => ({
  name: "dev-api",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use("/api/contact", async (req, res) => {
      try {
        const chunks: Buffer[] = [];
        for await (const chunk of req) chunks.push(chunk as Buffer);
        const body = req.method === "GET" || req.method === "HEAD" ? undefined : Buffer.concat(chunks);

        const request = new Request(`http://localhost${req.originalUrl ?? req.url}`, {
          method: req.method,
          headers: req.headers as Record<string, string>,
          body,
        });

        const mod = await server.ssrLoadModule("/netlify/functions/contact.ts");
        const response: Response = await mod.default(request, { ip: req.socket.remoteAddress });

        res.statusCode = response.status;
        response.headers.forEach((value, key) => res.setHeader(key, value));
        res.end(await response.text());
      } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end(JSON.stringify({ ok: false, error: "Internal error" }));
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      devApiPlugin(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
