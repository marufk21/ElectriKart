import React, { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import FilterSection from "../Components/FilterSection";
import ProductList from "../Components/ProductList";
import Sort from "../Components/Sort";

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      {/* Page header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            All Products
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Discover the latest electronics tailored to you.
          </p>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setIsFilterOpen(true)}
          >
            <FaFilter className="mr-2" /> Filters
          </button>
        </div>
      </div>

      {/* Mobile drawer for filters */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[90%] bg-white shadow-xl ring-1 ring-black/10 flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
              <span className="text-sm font-medium text-slate-700">
                Filters
              </span>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setIsFilterOpen(false)}
                aria-label="Close filters"
              >
                <FaTimes />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto p-4">
              <FilterSection />
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
        <div className="hidden md:block md:row-span-2 md:sticky md:top-24 self-start">
          <FilterSection />
        </div>
        <div className="md:col-start-2 md:sticky md:top-24 z-10">
          <Sort />
        </div>
        <div className="md:col-start-2 flex flex-wrap justify-center mt-2">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Products;
