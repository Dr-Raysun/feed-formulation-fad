import { addToCup, removeFromCup } from "@/lib/slice/pigSlice";
import { PigProduct } from "@/type";
import React from "react";
import { useDispatch } from "react-redux";

const CheckoutFormulation = ({ name, id, stage }: PigProduct) => {
  const dispatch = useDispatch();
  const addItemToCup = () => {
    //item to be added into the basket
    const feed = {
      name,
      id,
      stage,
    };
    //pushing the item into redus store
    dispatch(addToCup(feed));
  };
  //removing from cup
  const removeItemFromCup = () => {
    prompt(`removing item with id ${id}`);
    dispatch(removeFromCup({ id }));
  };
  return (
    <div
      className="  grid grid-cols-5 bg-white 
    shadow-md rounded-lg p-5 m-5 transition-transform transform hover:scale-105"
    >
      <div className="text-2xl  mx-5 col-span-3   text-blue-800 font-bold mb-2">
        <p>{name}</p>

        {/* <p className="border-2 border-yellow-600 text-xs my-2 line-clamp">
          {stage.starter}
        </p> */}
      </div>
      {/** Right add/remove button */}
      <div className="  flex flex-col space-y-2 my-auto justify-self-end">
        <button
          onClick={addItemToCup}
          className="button bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 "
        >
          Add to feed
        </button>
        <button
          onClick={removeItemFromCup}
          className="button bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-200 "
        >
          Remove feed
        </button>
      </div>
    </div>
  );
};

export default CheckoutFormulation;
