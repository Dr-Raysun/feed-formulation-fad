"use client";
import { addToCup } from "@/lib/slice/pigSlice";
import { PigProduct } from "@/type";
import React from "react";
import { useDispatch } from "react-redux";

const PigDisplay = ({ name, id, stage }: PigProduct) => {
  const dispatch = useDispatch();
  const addItemToCup = () => {
    // console.log(prompt(` pig feed number ${id}`));
    const feed = {
      name,
      id,
      stage,
    };
    //sending the prodcut as an action to redux store
    dispatch(addToCup(feed));
  };
  return (
    <div
      className="border-2 border-red-700 mx-2 relative flex flex-col
       bg-white  p-10 rounded-lg  mt-5"
    >
      <h4 className="border-4 border-blue-600 my-3">{name}</h4>

      <div className="">
        <button
          onClick={addItemToCup}
          className="mt-auto button p-2 text-sm md:text-sm bg-gradient-to-b from-blue-200 to-blue-400 border 
     border-yellow-300 rounded-md focus:outline-none 
     focus:ring-2 focus:ring-yellow-500 active:from-blue-500;"
        >
          Add ingredient
        </button>
      </div>
    </div>
  );
};

export default PigDisplay;
