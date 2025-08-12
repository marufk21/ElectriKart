import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const NavBar = () => {
  const { total_item } = useCartContext();
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-indigo-600"></span>
            <span className="text-xl font-semibold tracking-tight">
              ElectriKart
            </span>
          </NavLink>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-medium" : "text-slate-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-medium" : "text-slate-700"
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-medium" : "text-slate-700"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-medium" : "text-slate-700"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
          <NavLink
            to="/cart"
            className="relative inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
          >
            <span>Cart</span>
            <span className="ml-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-indigo-600 px-1.5 text-xs font-semibold text-white">
              {total_item || 0}
            </span>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default NavBar;
