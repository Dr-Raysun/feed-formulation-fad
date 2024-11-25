"use client";
import { db } from "@/firebase";
import { PigProduct } from "@/type";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

const AddingFeed = () => {
  const [name, setName] = useState("");
  const [starter, setStarter] = useState(0);
  const [grower, setGrower] = useState(0);
  const [finisher, setFinisher] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newFeedProduct: PigProduct = {
      name,
      stage: {
        starter,
        grower,
        finisher,
      },
    };
    // console.log(prompt("summiting"));
    try {
      // Add the product to Firestore
      await addDoc(collection(db, "feedProducts"), newFeedProduct);
      alert("Feed product added successfully!");
      // Reset form
      setName("");
      setStarter(0);
      setGrower(0);
      setFinisher(0);
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* add ingredien  */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Add Feed Ingredient
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Starter (%)
              </label>
              <input
                type="number"
                value={starter}
                onChange={(e) => setStarter(Number(e.target.value))}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Grower (%)
              </label>
              <input
                type="number"
                value={grower}
                onChange={(e) => setGrower(Number(e.target.value))}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Finisher (%)
              </label>
              <input
                type="number"
                value={finisher}
                onChange={(e) => setFinisher(Number(e.target.value))}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? "Adding..." : "Add Feed Ingredient"}
            </button>
          </form>
        </div>
      </div>
      {/* view ingredient */}
      {/* view users  */}
    </div>
  );
};

export default AddingFeed;
