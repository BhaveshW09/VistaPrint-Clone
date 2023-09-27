import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AlignLeft, X } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className=" max-w-[1280px] m-auto">
        <nav>
          <Link to="/home" className="title">
            E-Commerce App
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <AlignLeft />}
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/allProducts">All Products</NavLink>
            </li>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
