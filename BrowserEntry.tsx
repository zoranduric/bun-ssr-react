import App from "./App";
import { hydrateRoot } from "react-dom/client";

const domNode = document.getElementById("root")!;

hydrateRoot(domNode, <App />);
