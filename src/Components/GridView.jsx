import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <section className="w-full">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((curELem) => (
          <Product key={curELem.id} {...curELem} />
        ))}
      </div>
    </section>
  );
};

export default GridView;
