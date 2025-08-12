import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import GridView from "./GridView";

const ProductList = () => {
  const { filter_products } = useFilterContext();

  if (!filter_products || filter_products.length === 0) {
    return (
      <div className="text-center text-slate-500 py-12 w-full">
        No products found.
      </div>
    );
  }

  // Currently only grid view is supported in this minimal UI
  return <GridView products={filter_products} />;
};

export default ProductList;
