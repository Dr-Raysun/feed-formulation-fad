import { PigProduct } from "@/type";
import React from "react";
import PigDisplay from "./PigDisplay";

type feedProps = {
  feeds: PigProduct[];
};
const PigFeed = ({ feeds }: feedProps) => {
  return (
    <div className="">
      <h1
        className="mt-8 mx-8 text-2xl font-extrabold 
      leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl "
      >
        pick ingredient
      </h1>
      <div
        className="  grid  grid-flow-row-dense md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 p-4 md:mt-4 mx-auto "
      >
        {feeds.map(({ name, id, stage }) => (
          <>
            <PigDisplay key={id} id={id} name={name} stage={stage} />
          </>
        ))}
      </div>
    </div>
  );
};

export default PigFeed;
