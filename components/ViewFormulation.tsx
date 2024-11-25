"use client";
import { decrement, increment } from "@/lib/slice/feedSlice";
import { RootState } from "@/lib/store";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ViewFormulation = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="">
      <Link href="">
        <div className="flex justify-between border border-blue-800 border-b-4 w-[80%] m-auto">
          <p className=" border  w-[50%] flex justify-center ">
            <Image
              src="/image/broiler2.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </p>
          <p className=" border  w-[50%] flex justify-center">
            <Image
              src="/image/pig.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </p>
        </div>
      </Link>

      <div className="flex justify-between  w-[80%] h-20 m-auto ">
        <p className="  w-[50%]    flex flex-col space-y-2  my-auto justify-self-center">
          <button
            onClick={() => {
              const levelData = "starter"; // Data to send
              router.push(`/birdstarter?level=${levelData}`); // Navigate to /birdgrower with query params
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded-sm"
          >
            Starter
          </button>
        </p>
        <p className="  w-[50%]  flex flex-col space-y-2  my-auto justify-self-center">
          <button
            onClick={() => {
              const levelData = "starter"; // Data to send
              router.push(`/pigstarter?level=${levelData}`); // Navigate to /birdgrower with query params
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded-sm"
          >
            Starter
          </button>
        </p>
      </div>
      {/* for pig and bird */}
      <div className="flex justify-between  w-[80%] h-20 m-auto">
        <p className="  w-[50%]  flex flex-col space-y-2 my-auto justify-self-end ">
          <button
            onClick={() => {
              const levelData = "grower"; // Data to send
              router.push(`/birdgrower?level=${levelData}`); // Navigate to /pigrower with query params
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded-sm"
          >
            Grower
          </button>
        </p>
        <p className="  w-[50%]  flex flex-col space-y-2 my-auto justify-self-end ">
          <button
            onClick={() => {
              const levelData = "grower"; // Data to send
              router.push(`/pigrower?level=${levelData}`); // Navigate to /pigrower with query params
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded-sm"
          >
            Grower
          </button>
        </p>
      </div>
      <div className="flex justify-between  w-[80%] h-20  m-auto ">
        <p className="  w-[50%]  flex flex-col space-y-2 my-auto justify-self-end ">
          <button
            onClick={() => {
              const levelData = "finisher"; // Data to send
              router.push(`/birdfinisher?level=${levelData}`); // Navigate to /pigrower with query params
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded-sm"
          >
            Finisher
          </button>
        </p>
        <p className=" w-[50%]  flex flex-col space-y-2 my-auto justify-self-end ">
          <button
            onClick={() => {
              const levelData = "finisher"; // Data to send
              router.push(`/pigfinisher?level=${levelData}`); // Navigate to /pigrower with query params
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded-sm"
          >
            Finisher
          </button>
        </p>
      </div>
      {/* <div className="m-10">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
    </div>
  );
};

export default ViewFormulation;
