// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProblemProvider } from "./Context/ProblemContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProblemProvider>
      <App />
    </ProblemProvider>
  </StrictMode>
);
