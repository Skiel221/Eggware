import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Si usas archivo CSS separado

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          TuLogo
        </Link>

        {/* Menú principal */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Inicio
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/products" className="navbar-link">
              Productos
            </Link>
          </li>
        </ul>

        {/* Menú usuario/auth */}
        <div className="navbar-auth">
          {user ? (
            <Link to="/admin" className="navbar-button">
              Panel Admin
            </Link>
          ) : (
            <Link to="/auth" className="navbar-button">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;