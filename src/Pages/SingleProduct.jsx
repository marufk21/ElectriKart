import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import PageNavigation from "../Components/PageNavigation";
import { useProductContext } from "../Context/ProductState";
import StarReview from "../Components/StarReview";
import AddToCart from "../Components/AddToCart";
import ProductImage from "../Components/ProductImage";
import FormatPrice from "../Helpers/FormatPrice";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { isSingleLoading, singleProduct, getSingleProduct, isError } =
    useProductContext();

  const { id } = useParams();
  const {
    name = "",
    image = [],
    company = "",
    price = 0,
    description = "",
    category = "",
    stock = 0,
    stars = 0,
    reviews = 0,
  } = singleProduct || {};

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isSingleLoading) {
    return (
      <section className="px-4 py-16 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="skeleton h-80 w-full" />
          <div>
            <div className="skeleton h-6 w-32 mb-4" />
            <div className="skeleton h-8 w-1/2 mb-6" />
            <div className="skeleton h-4 w-full mb-2" />
            <div className="skeleton h-4 w-5/6 mb-2" />
            <div className="skeleton h-4 w-2/3" />
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="px-4 py-16 mx-auto max-w-7xl">
        <div className="card p-8 text-center">
          <h3 className="text-lg font-semibold">Unable to load product</h3>
          <p className="text-sm text-slate-600 mt-1">Please try again later.</p>
          <NavLink to="/products" className="btn btn-primary mt-6 inline-block">
            Back to products
          </NavLink>
        </div>
      </section>
    );
  }
  return (
    <>
      <PageNavigation title={name} />
      <section className="overflow-hidden">
        <div className="px-4 py-8 mx-auto max-w-7xl">
          <div className="mb-6">
            <PageNavigation title={name || "Product"} />
          </div>
          <div className="flex flex-wrap gap-8">
            <ProductImage imgs={image} />

            <div className="lg:w-1/2 w-full lg:pl-6 lg:py-2 mt-2 lg:mt-0">
              <h2 className="text-sm text-slate-500 tracking-widest">
                {company}
              </h2>
              <h1 className="text-slate-900 text-3xl font-semibold mb-3">
                {name}
              </h1>

              <div className="flex items-center justify-between">
                <StarReview
                  stars={stars || 0}
                  category={category}
                  reviews={reviews || 0}
                />
                <div className="text-xl font-semibold text-indigo-600">
                  <FormatPrice price={price || 0} />
                </div>
              </div>

              <p className="leading-relaxed text-slate-700 mt-4">
                {description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
                <div className="card p-4">
                  <div className="text-slate-500">Category</div>
                  <div className="font-medium text-slate-800 capitalize">
                    {category || "-"}
                  </div>
                </div>
                <div className="card p-4">
                  <div className="text-slate-500">Availability</div>
                  <div className="font-medium text-slate-800">
                    {stock > 0 ? `${stock} in stock` : "Out of stock"}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                {stock > 0 ? (
                  <AddToCart price={price} product={singleProduct} />
                ) : (
                  <div className="text-sm text-red-600 font-medium">
                    Currently unavailable
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <NavLink to="/products" className="btn btn-ghost">
              ← Back to products
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
