import React from "react";
import { Link, useLocation } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../assets/styles/navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">GameVault</div>
      <ul className="nav-links">
        <li className={location.pathname === "/monitores" ? "active" : ""}>
          <Link to="/monitores">Monitores</Link>
        </li>
        <li className={location.pathname === "/consolas" ? "active" : ""}>
          <Link to="/consolas">Consolas</Link>
        </li>
        <li className={location.pathname === "/computadoras" ? "active" : ""}>
          <Link to="/computadoras">Computadoras</Link>
        </li>
        <li className={location.pathname === "/accesorios" ? "active" : ""}>
          <Link to="/accesorios">Accesorios</Link>
        </li>
      </ul>
      <div className="nav-icons">
        <CartWidget />
        <Link to="/login" className="login-icon">Iniciar Sesión</Link>
      </div>
    </nav>
  );
};

export default Navbar;
