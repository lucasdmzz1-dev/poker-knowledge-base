import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { Portao } from "@/components/portao"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Portao>
      <App />
    </Portao>
  </StrictMode>
)
