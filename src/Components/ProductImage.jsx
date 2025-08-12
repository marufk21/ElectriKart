import React, { useState } from "react";
const ProductImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage] = useState(imgs[0]);
  return (
    <>
      <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded card overflow-hidden">
        <img
          src={mainImage.url}
          alt={mainImage?.filename || "product"}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default ProductImage;
