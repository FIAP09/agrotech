import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Tecnologias from "./pages/Tecnologias.jsx";
import OrgaosEIniciativas from "./pages/OrgaosEIniciativas.jsx";
import SobreNos from "./pages/SobreNos.jsx";
import Contato from "./pages/Contato.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};



  useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }
}, []);

useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);

useEffect(() => {
  document.body.className = theme;
}, [theme]);

  return (
  <div className={theme}>
    <Routes>
      <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
        <Route path="/" element={<Home />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/orgaos-e-iniciativas" element={<OrgaosEIniciativas />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>
);
}
