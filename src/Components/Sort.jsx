import React from "react";
import { useFilterContext } from "../Context/FilterContext";

const Sort = () => {
  const { filter_products, sorting } = useFilterContext();
  return (
    <>
      <div className="card px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="text-sm text-slate-600">
          {filter_products.length} products
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm text-slate-600">
            Sort by
          </label>
          <select
            name="sort"
            id="sort"
            className="py-2 px-3 pr-8 text-sm font-normal text-slate-700 bg-white rounded-lg border border-slate-300 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={sorting}
          >
            <option value="relevance">Relevance</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="a-z">Name: A–Z</option>
            <option value="z-a">Name: Z–A</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Sort;
