import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/img/logo.png" alt="Logo AgroTech Grupo 09" />
      </div>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setOpen((v) => !v)}
      >
        &#9776;
      </button>

      <ul
        className="nav-links"
        style={open ? { display: "block" } : undefined}
      >
        <li>
          <NavLink to="/" onClick={close} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tecnologias" onClick={close}>
            Tecnologias
          </NavLink>
        </li>
        <li>
          <NavLink to="/orgaos-e-iniciativas" onClick={close}>
            Órgãos e Iniciativas
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre-nos" onClick={close}>
            Sobre Nós
          </NavLink>
        </li>
        <li>
          <NavLink to="/contato" onClick={close}>
            Fale Conosco
          </NavLink>
        </li>

        {/* BOTÃO DE TEMA */}
        <li>
          <button
            onClick={() => {
              console.log("clicou");
              toggleTheme();
            }}
            className="theme-btn"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
