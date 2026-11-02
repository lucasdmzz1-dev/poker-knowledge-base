import { HashRouter, Route, Routes } from "react-router-dom"
import { Layout } from "@/components/layout"
import Admin from "@/pages/admin"
import Analise from "@/pages/analise"
import Home from "@/pages/home"
import Pratica from "@/pages/pratica"
import Teoria14 from "@/pages/teoria-14"
import Teoria15 from "@/pages/teoria-15"
import Teoria17 from "@/pages/teoria-17"
import TeoriaModulo from "@/pages/teoria-modulo"
import TeoriaIndex from "@/pages/teoria-index"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teoria" element={<TeoriaIndex />} />
          <Route path="teoria/bet-vs-missed" element={<Teoria15 />} />
          <Route path="teoria/probe-turn" element={<Teoria14 />} />
          <Route path="teoria/bb-raise-pot-vs-sb" element={<Teoria17 />} />
          <Route path="teoria/:slug" element={<TeoriaModulo />} />
          <Route path="pratica" element={<Pratica />} />
          <Route path="analise" element={<Analise />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
