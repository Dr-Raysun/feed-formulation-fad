"use client";

import React, { Suspense } from "react";
import ReUsableCheckoutFormulation from "@/components/pig/reusableCheckoutFormulation";
import { selectItemsFeed } from "@/lib/slice/pigSlice";
import { PigProduct } from "@/type";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

const PigGrowerContent = () => {
  const searchParams = useSearchParams();

  // Retrieve the query param
  const grower = searchParams.get("level") || "default"; // Provide a default value
  const itemsFeed: PigProduct[] = useSelector(selectItemsFeed) || []; // Ensure itemsFeed is defined

  return (
    <div className="bg-gray-100">
      <main className="lg:flex max-w-screen-xl mx-auto">
        {/** Left-hand section */}
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl font-semibold border-b-2 pb-4 mb-8">
              <p>Pig {grower} stage</p>
              {itemsFeed.length === 0 ? "Your basket is empty" : "Formulation"}
            </h1>
            {itemsFeed.length > 0 ? (
              itemsFeed.map((item, index) => (
                <ReUsableCheckoutFormulation
                  key={item.id || index} // Use unique ID if available
                  id={item.id}
                  name={item.name}
                  stage={item.stage}
                  stageType={grower}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No items found.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

const PigGrowerPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PigGrowerContent />
    </Suspense>
  );
};

export default PigGrowerPage;
