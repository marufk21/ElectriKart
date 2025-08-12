import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, image, name, price } = curElem;

  return (
    <NavLink to={`/singleproduct/${id}`} className="group">
      <div className="card overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative w-full pt-[66%] bg-slate-100">
          <img
            alt={name}
            src={image}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold capitalize tracking-tight text-slate-900 line-clamp-1">
            {name}
          </h3>
          <div className="mt-2 text-indigo-600 font-semibold text-sm">
            <FormatPrice price={price} />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
