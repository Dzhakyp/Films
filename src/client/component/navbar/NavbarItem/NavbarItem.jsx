import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarItem({ title, to }) {
  return (
    <li>
      <NavLink className="routes_title" to={to}>
        {title}
      </NavLink>
    </li>
  );
}
