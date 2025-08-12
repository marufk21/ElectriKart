import { useProductContext } from "../Context/ProductState";
import Product from "./Product";

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <section className="bg-white">
        <div className="max-w-7xl px-4 py-12 mx-auto">
          <div className="max-w-md mx-auto mb-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Our Products
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="card p-4">
                <div className="skeleton h-40 w-full mb-4" />
                <div className="skeleton h-4 w-2/3 mb-2" />
                <div className="skeleton h-4 w-1/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl px-4 py-12 mx-auto">
          <div className="max-w-md mx-auto mb-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Our Products
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureProducts.map((curElem) => (
              <Product key={curElem.id} {...curElem} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
