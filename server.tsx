import { Index } from "./index";
import { renderToString } from "react-dom/server";

const server = Bun.serve({
  async fetch(req) {
    const { pathname } = new URL(req.url);
    if (pathname === "/") {
      const App = require("./App");
      const Compontent = App.default;
      const serverSideProps = await App.getServerSideProps();
      const html = renderToString(
        <Index initialData={serverSideProps.props} children={<Compontent {...serverSideProps.props} />} />
      );
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
console.log(`Listening on ${server.url}`);