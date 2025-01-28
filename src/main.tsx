import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ActiveLinkProvider } from "./context/ActiveLinkContext.tsx";
import { ToggleProvider } from "./context/ToggleContext.tsx";
import App from "./App.tsx";
import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ActiveLinkProvider>
      <ToggleProvider>
        <App />
      </ToggleProvider>
    </ActiveLinkProvider>
  </StrictMode>
);
