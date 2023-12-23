import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span>S</span>-tore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-5">
                <NavLink className="nav-link" to="products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item ms-5">
                <NavLink className="nav-link" to="profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item ms-5">
                <NavLink className="nav-link" to="cart">
                  Cart
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
