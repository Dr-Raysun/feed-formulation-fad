import { Product } from "@/type";
import React from "react";
import ProductDisplay from "./ProductDisplay";

type productFeedProps = {
  products: Product[];
};
const ProductFeed = ({ products }: productFeedProps) => {
  return (
    <div className="">
      <div
        className="border-4 border-blue-900  grid  grid-flow-row-dense md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 md:mt-2 mx-auto"
      >
        {products.map(({ title, id, price, description, category, image }) => (
          <>
            <ProductDisplay
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductFeed;
