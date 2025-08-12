import React from "react";
import { FaCheck, FaSearch } from "react-icons/fa";
import { useFilterContext } from "../Context/FilterContext";
import FormatPrice from "../Helpers/FormatPrice";
const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <>
      <aside className="w-full" aria-label="Sidebar">
        <div className="card p-3">
          <div className="space-y-4 divide-y divide-slate-200/80">
            {/* Search */}
            <div className="pt-1">
              <form onSubmit={(e) => e.preventDefault()} className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  type="text"
                  name="text"
                  placeholder="Search products"
                  value={text}
                  onChange={updateFilterValue}
                />
              </form>
            </div>

            {/* Category */}
            <div className="pt-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categoryData.map((categoryName, index) => {
                  const isSelected = categoryName === category;
                  return (
                    <button
                      key={index}
                      type="button"
                      name="category"
                      value={categoryName}
                      onClick={updateFilterValue}
                      className={`px-2.5 py-1 rounded-full text-xs transition-colors border ${
                        isSelected
                          ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      } capitalize`}
                      aria-pressed={isSelected}
                    >
                      {categoryName}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Company */}
            <div className="pt-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Company
              </h3>
              <select
                name="company"
                id="company"
                className="w-full rounded-md border border-slate-300 bg-white py-1.5 px-3 text-sm text-slate-700 capitalize focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                onChange={updateFilterValue}
              >
                {companyData.map((companyName, index) => (
                  <option key={index} value={companyName} name="company">
                    {companyName}
                  </option>
                ))}
              </select>
            </div>

            {/* Colors */}
            <div className="pt-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Colors
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                {colorsData.map((currentColor, index) => {
                  if (currentColor === "all") {
                    return (
                      <button
                        key={index}
                        type="button"
                        value={currentColor}
                        name="color"
                        className="px-2.5 py-1 rounded-full text-xs border border-slate-200 text-slate-600 hover:bg-slate-50"
                        onClick={updateFilterValue}
                      >
                        All
                      </button>
                    );
                  }

                  const isActive = color === currentColor;
                  return (
                    <button
                      key={index}
                      type="button"
                      value={currentColor}
                      name="color"
                      onClick={updateFilterValue}
                      className={`relative grid place-items-center h-6 w-6 rounded-full border ${
                        isActive
                          ? "ring-2 ring-offset-1 ring-indigo-500 border-transparent"
                          : "border-slate-300"
                      }`}
                      style={{ backgroundColor: currentColor }}
                      aria-label={currentColor}
                      aria-pressed={isActive}
                    >
                      {isActive ? (
                        <FaCheck className="text-white text-[9px]" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price */}
            <div className="pt-4">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Price
                </h3>
                <p className="text-sm font-medium text-slate-700">
                  <FormatPrice price={price} />
                </p>
              </div>
              <input
                className="w-full accent-indigo-600"
                type="range"
                name="price"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={updateFilterValue}
              />
            </div>

            {/* Clear */}
            <div className="pt-4">
              <button
                className="w-full btn btn-ghost border border-slate-300 py-1.5 text-sm"
                onClick={clearFilters}
              >
                Clear filters
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSection;
