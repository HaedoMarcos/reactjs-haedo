import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <h2>
        <strong className="title">MUNDO PC</strong>
      </h2>
      <nav className="nav">
        <ul className="navlista">
          <li className="navitem">Inicio</li>
          <li className="navitem">Productos</li>
          <li className="navitem">Nosotros</li>
          <li className="navitem">Contacto</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
