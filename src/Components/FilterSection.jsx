import React from "react";
import { FaCheck } from "react-icons/fa";
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
      <aside className="w-full sm:w-64 sticky top-12" aria-label="Sidebar">
        <div className="px-3 py-2 pb-5 rounded dark:bg-gray-800">
          <div className="flex flex-col items-center mb-4">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full bg-gray-100 bg-opacity-50 rounded-full border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                name="text"
                placeholder="Search for products"
                value={text}
                onChange={updateFilterValue}
              />
            </form>
          </div>

          <div className="flex flex-col items-center mb-4">
            <h3 className="mb-2 text-lg font-normal text-gray-500">Category</h3>
            <span className="flex flex-col">
              {categoryData.map((curElem, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    value={curElem}
                    className={
                      curElem === category
                        ? "capitalize  text-lg font-normal text-purple-600"
                        : "capitalize  text-lg font-normal text-gray-500"
                    }
                    onClick={updateFilterValue}
                  >
                    {curElem}
                  </button>
                );
              })}
            </span>
          </div>

          <div className="flex flex-col items-center mb-4">
            <h3 className="mb-2 text-lg font-normal text-gray-500">Company</h3>
            <form action="#">
              <select
                name="company"
                id="company"
                className="w-full bg-gray-100 bg-opacity-50 rounded-full border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 pr-9 leading-8 transition-colors duration-200 ease-in-out capitalize"
                onChange={updateFilterValue}
              >
                {companyData.map((curElem, index) => {
                  return (
                    <option key={index} value={curElem} name="company">
                      {curElem}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>

          <div className="flex flex-col items-center mb-4">
            <h3 className="text-lg font-normal text-gray-500">Colors</h3>
            <div className="flex items-end flex-wrap space-x-px">
              {colorsData.map((curColor, index) => {
                if (curColor === "all") {
                  return (
                    <button
                      key={index}
                      type="button"
                      value={curColor}
                      name="color"
                      className=""
                      onClick={updateFilterValue}
                    >
                      <span className="text-base font-normal text-gray-500">
                        All
                      </span>
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    type="button"
                    value={curColor}
                    name="color"
                    style={{ backgroundColor: curColor }}
                    className={
                      color === curColor
                        ? "mt-2 border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none opacity-100"
                        : "mt-2 border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                    }
                    onClick={updateFilterValue}
                  >
                    {color === curColor ? (
                      <FaCheck className="text-white text-xs" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center mt-5">
            <div className="flex space-x-3">
              <h3 className="text-lg font-normal text-gray-500">Price</h3>
              <p className="text-lg font-normal text-gray-500">
                <FormatPrice price={price} />
              </p>
            </div>
            <input
              className="my-2 accent-purple-500"
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={updateFilterValue}
            />
          </div>

          <div className="flex justify-center mt-1">
            <button
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSection;
