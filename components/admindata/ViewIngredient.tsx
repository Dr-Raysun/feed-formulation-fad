"use client";
import { db } from "@/firebase";
import { PigProduct } from "@/type";
import { collection, deleteDoc, doc, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

const ViewIngredient = () => {
  const [feedProducts, setFeedProducts] = useState<PigProduct[]>([]);
  const [loadingDelete, setLoadingDelete] = useState<string | null>(null); // Track loading state for deletion
  const [docs, loading, error] = useCollection(
    query(collection(db, "feedProducts"))
  );
  useEffect(() => {
    if (!docs) return;
    const products: PigProduct[] = docs.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      stage: {
        starter: doc.data().stage.starter,
        grower: doc.data().stage.grower,
        finisher: doc.data().stage.finisher,
      },
    }));
    setFeedProducts(products);
  }, [docs]);

  //   useEffect(() => {
  //     if (!docs) return;

  //     // Using concise arrow function syntax without explicit return
  //     const files: PigProduct[] = docs.docs.map((doc) => ({
  //       id: doc.id,
  //       ...(doc.data() as PigProduct), // Spread the data with type assertion
  //     }));

  //     setFeedProducts(files);
  //   }, [docs]);

  // Function to delete a feed product
  const deleteFeedProduct = async (id: string) => {
    setLoadingDelete(id); // Set the loading state for the product being deleted
    try {
      await deleteDoc(doc(db, "feedProducts", id)); // Delete the document from Firestore
      setFeedProducts(feedProducts.filter((product) => product.id !== id)); // Remove the deleted product from the state
      alert("Feed product deleted successfully!");
    } catch (error) {
      console.error("Error deleting feed product: ", error);
      alert("Failed to delete feed product.");
    } finally {
      setLoadingDelete(null); // Reset the loading state
    }
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Feed Products
            </h1>
            {loading ? (
              <div className="text-center">Loading feed products...</div>
            ) : error ? (
              <p className="text-center text-red-500">{error.message}</p>
            ) : feedProducts.length > 0 ? (
              <table className="table-auto w-full text-left">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Starter (%)</th>
                    <th className="px-4 py-2">Grower (%)</th>
                    <th className="px-4 py-2">Finisher (%)</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {feedProducts.map((product) => (
                    <tr key={product.id} className="border-b">
                      <td className="px-4 py-2">{product.name}</td>
                      <td className="px-4 py-2">{product.stage.starter}</td>
                      <td className="px-4 py-2">{product.stage.grower}</td>
                      <td className="px-4 py-2">{product.stage.finisher}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => deleteFeedProduct(product.id)} // Ensure id is not undefined
                          disabled={loadingDelete === product.id} // Disable button while the product is being deleted
                          className={`bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 ${
                            loadingDelete === product.id
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          {loadingDelete === product.id
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center">No feed products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewIngredient;
