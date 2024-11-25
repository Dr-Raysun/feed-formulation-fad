import { addToCup, removeFromCup } from "@/lib/slice/pigSlice";
import { PigProduct } from "@/type";
import React from "react";
import { useDispatch } from "react-redux";

const ReUsableCheckoutFormulation = ({
  name,
  id,
  stage,
  stageType,
}: PigProduct) => {
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

  // Determine which stage value to display based on stageType
  let stageValue;
  if (stageType === "grower") {
    stageValue = stage.grower;
  } else if (stageType === "starter") {
    stageValue = stage.starter;
  } else if (stageType === "finisher") {
    stageValue = stage.finisher;
  }
  return (
    <div
      className=" grid grid-cols-5  bg-white 
    shadow-md rounded-lg p-5 m-5 transition-transform transform hover:scale-105"
    >
      <div className=" col-span-3 text-2xl">
        <p>{name}</p>
        {/* {stageType} */}

        <p className="  text-xl my-2 ">{stageValue} (%)</p>
      </div>
      {/** Right add/remove button */}
      <div className=" flex flex-col space-y-2 my-auto justify-self-end">
        {/* <button onClick={addItemToCup} className="button  ">
          Add to feed
        </button> */}
        <button
          onClick={removeItemFromCup}
          className="button bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-200"
        >
          Remove feed
        </button>
      </div>
    </div>
  );
};

export default ReUsableCheckoutFormulation;
