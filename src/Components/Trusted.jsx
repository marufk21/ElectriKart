import React from "react";

const brands = ["Apple", "Samsung", "Sony", "Xiaomi", "Motorola", "LG"];

function Trusted() {
  return (
    <div className="py-16">
      <h2 className="text-center text-2xl font-semibold tracking-tight">
        Trusted by top electronics brands
      </h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
        {brands.map((brand) => (
          <div key={brand} className="card py-6 text-center text-slate-700">
            <span className="text-sm font-medium">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trusted;
