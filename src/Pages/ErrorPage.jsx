import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <main className="min-h-[60vh] w-full flex flex-col justify-center items-center bg-slate-900">
        <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-purple-600 px-2 text-sm rounded mt-4">
          Page Not Found
        </div>
        <button className="mt-5">
          <NavLink to="/" className="btn btn-primary">
            <span className="relative block px-8 py-3">Go Home</span>
          </NavLink>
        </button>
      </main>
    </>
  );
};

export default ErrorPage;
