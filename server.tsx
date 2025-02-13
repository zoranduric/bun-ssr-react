import { Index } from "./index";
import { renderToString } from "react-dom/server";

Bun.serve({
  async fetch(req) {
    const { pathname } = new URL(req.url);
    if (pathname === "/") {
      const html = renderToString(<Index />);
      return new Response(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      });
    } else {
      return new Response("Not found", { status: 404 });
    }
  },
  port: process.env.Port || 8080,
});
