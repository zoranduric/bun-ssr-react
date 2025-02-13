import App from "./App";
import { hydrateRoot } from "react-dom/client";
import type { Props } from "./App";
declare global {
  interface Window {
    __INITIAL_DATA__: Props;
  }
}

const domNode = document.getElementById("root")!;

const initialData = window.__INITIAL_DATA__;


hydrateRoot(domNode, <App {...initialData} />);
