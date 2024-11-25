import { addToBasket, removeFromBasket } from "@/lib/slice/basketSlice";
import { Product } from "@/type";
import React from "react";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({
  title,
  id,
  price,
  description,
  category,
  image,

  rating,
}: Product) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    //item to be added into the basket
    const product = {
      title,
      id,
      price,
      description,
      category,
      image,
      rating,
    };
    //pushing the item into redus store
    dispatch(addToBasket(product));
  };
  //removing from basket
  const removeItemFromBasket = () => {
    prompt(`removing item with id ${id}`);
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="border-4 border-blue-800 grid grid-cols-5">
      {/* <Image src={image} width={200} height={200} objectFit="contain" /> */}
      {/** middle section of the basket  */}
      <div className="border-4 border-green-700 mx-5 col-span-3">
        <p>{title}</p>

        <div className="border border-black">
          {/* {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))} */}
        </div>
        <p className="border-2 border-yellow-600 text-xs my-2 line-clamp">
          {description}
        </p>
        {/* <Currency quantity={price} currency="NGN" /> */}
        {/* {hasPrime && (
            <div className="flex items-center space-x-2">
              
              <p className="hidden md:block text-xs text-gray-500">
                FREE Next-day Delivery
              </p>
            </div>
          )} */}
      </div>
      {/** Right add/remove button */}
      <div className=" border-4 border-green-900 flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button  ">
          Add to Basket{" "}
        </button>
        <button onClick={removeItemFromBasket} className="button ">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
