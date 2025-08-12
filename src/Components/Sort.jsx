import React from "react";
import { useFilterContext } from "../Context/FilterContext";

const Sort = () => {
  const { filter_products, sorting } = useFilterContext();
  return (
    <>
      <div className="grid grid-cols-2 divide-x items-center mt-6">
        <div className="flex justify-center">
          <div className="flex items-center">
            <select
              name="sort"
              id="sort"
              className="py-2.5 px-5 pr-8 mr-2 mb-2 text-sm font-normal text-slate-700 bg-white rounded-lg border border-slate-300 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
        <div className="flex justify-center">
          <span className="py-2.5 px-5 mr-2 mb-2 text-sm font-normal text-slate-600 bg-white rounded-lg border border-slate-300">{`Product Available ${filter_products.length}`}</span>
        </div>
      </div>
    </>
  );
};

export default Sort;
