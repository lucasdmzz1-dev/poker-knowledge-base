import { HashRouter, Route, Routes } from "react-router-dom"
import { Layout } from "@/components/layout"
import Analise from "@/pages/analise"
import Home from "@/pages/home"
import Pratica from "@/pages/pratica"
import Teoria15 from "@/pages/teoria-15"
import TeoriaIndex from "@/pages/teoria-index"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teoria" element={<TeoriaIndex />} />
          <Route path="teoria/bet-vs-missed" element={<Teoria15 />} />
          <Route path="pratica" element={<Pratica />} />
          <Route path="analise" element={<Analise />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
