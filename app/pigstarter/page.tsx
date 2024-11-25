"use client";
import ReUsableCheckoutFormulation from "@/components/pig/reusableCheckoutFormulation";
import { selectItemsFeed } from "@/lib/slice/pigSlice";
import { PigProduct } from "@/type";
import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

const PigStarterPage = () => {
  const searchParams = useSearchParams();
  // Retrieve the query param
  const grower = searchParams.get("level") || undefined; // Convert null to undefined;
  const itemsFeed: PigProduct[] = useSelector(selectItemsFeed);

  return (
    <div>
      <div className=" bg-gray-100">
        <main className="  lg:flex max-w-screen-xl mx-auto">
          {/** left hand section */}
          <div className="flex-grow m-5 shadow-sm">
            <div className="flex flex-col p-5 space-y-10 bg-white ">
              <h1 className="text-3xl font-semibold border-b-2 pb-4 mb-8">
                <p>Pig {grower} stage</p>
                {itemsFeed.length == 0
                  ? "Your basket is empty "
                  : "formulation   "}
              </h1>
              {itemsFeed.map((item, index) => (
                <ReUsableCheckoutFormulation
                  key={index}
                  id={item.id}
                  name={item.name}
                  stage={item.stage}
                  stageType={grower}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PigStarterPage;
