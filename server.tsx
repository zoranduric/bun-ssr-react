import { Index } from "./index";
import { renderToString } from "react-dom/server";

Bun.serve({
  async fetch(req) {
    const { pathname } = new URL(req.url);
    if (pathname === "/") {
      const App = require("./App").default;
      const html = renderToString(<Index children={<App />} />);
      return new Response(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      });
    } else if (pathname === "/index.js") {
      const buildOutput = await Bun.build({
        entrypoints: ["./BrowserEntry.tsx"],
      });
      return new Response(await buildOutput.outputs[0].text(), {
        headers: {
          "Content-Type": "application/javascript; charset=utf-8",
        },
      });
    } else {
      return new Response("Not found", { status: 404 });
    }
  },
  port: process.env.Port || 8080,
});
