import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // or main.css — just be consistent

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
