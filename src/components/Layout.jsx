import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ theme, toggleTheme }) {
  return (
    <div className="layout">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}