"use client";
import { addToBasket } from "@/lib/slice/basketSlice";
import { Product } from "@/type";
import React from "react";
import { useDispatch } from "react-redux";

const ProductDisplay = ({
  title,
  id,
  price,
  description,
  category,
  image,
}: Product) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    console.log("i have add");
    const product = {
      title,
      id,
      price,
      description,
      category,
      image,
    };
    //sending the prodcut as an action to redux store
    dispatch(addToBasket(product));
    console.log("i have done it", product);
  };
  return (
    <div>
      <div
        className="border-2 border-red-700 mx-2 relative flex flex-col
       bg-white  p-10 rounded-lg  mt-5"
      >
        <p className="absolute border-2 border-green-700 top-2 right-2 text-xs italic text-gray-400">
          {category}
        </p>
        {/* <Image src={image} height={200} width={200} objectFit="contain" /> */}
        <h4 className="border-4 border-blue-600 my-3">{title}</h4>

        {/* <div className="flex ">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} className="h-5 text-yellow-500" />
            ))}
        </div> */}

        <p className="border-4 border-green-700 text-xs  my-2 line-clamp-3">
          {description}
        </p>
        <div className="">
          {/* <Currency quantity={price} currency="NGN" /> */}
        </div>
        {/* {hasPrime && (
          <>
            <div className="flex items-center space-x-2 -mt-5">
              <img src="https://bit.ly/3prP2qx" alt="PRIME" />
              <p className="text-xs text-gray-500">FREE Next-day delivery</p>
            </div>
          </>
        )} */}
        <button onClick={addItemToBasket} className="mt-auto button">
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
