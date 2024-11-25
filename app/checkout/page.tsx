"use client";
import CheckoutProduct from "@/components/CheckoutProduct";
import { selectItems } from "@/lib/slice/basketSlice";
import { Product } from "@/type";
import React from "react";
import { useSelector } from "react-redux";

const CheckOutPage = () => {
  const items: Product[] = useSelector(selectItems);
  return (
    <div>
      <div className="border-4 border-green-900 bg-gray-100">
        <main className=" border-4 border-blue-700 lg:flex max-w-screen-xl mx-auto">
          {/** left hand section */}
          <div className="flex-grow m-5 shadow-sm">
            <div className="flex flex-col p-5 space-y-10 bg-white ">
              <h1 className="text-3xl font-semibold border-b-2 pb-4 mb-8">
                {items.length == 0
                  ? "Your basket is empty "
                  : "shoopping basket "}
              </h1>
              {items.map((item, index) => (
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CheckOutPage;
