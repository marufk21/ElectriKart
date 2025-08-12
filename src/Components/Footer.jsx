import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
          <div className="flex items-center gap-3">
            <span className="inline-block h-7 w-7 rounded-md bg-indigo-600"></span>
            <span className="text-sm text-slate-600">
              © {new Date().getFullYear()} ElectriKart
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <NavLink to="/about" className="hover:text-slate-900">
              About
            </NavLink>
            <NavLink to="/products" className="hover:text-slate-900">
              Products
            </NavLink>
            <NavLink to="/contact" className="hover:text-slate-900">
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
