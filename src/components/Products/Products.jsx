import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Products.css";
export default function Products() {
  return (
    <div>
      <div className="text-center my-3">
        <NavLink className="product-link" end to={"/products"}>
          All Products
        </NavLink>
        <NavLink className="product-link mx-5" to={"new"}>
          New
        </NavLink>
        <NavLink className="product-link" to={"featured"}>
          Feature
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
