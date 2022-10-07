import React from "react";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          MUNDO CALZADO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Adidas">
                Adidas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Nike">
                Nike
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contacto">
                Contacto
              </a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
