import PigFeed from "@/components/pig/PigFeed";
import ProductFeed from "@/components/ProductFeed";
import ViewFormulation from "@/components/ViewFormulation";
import { db } from "@/firebase";
import { PigProduct, Product } from "@/type";
import { collection, getDocs } from "firebase/firestore";
import React from "react";

// Fetch feed products from Firestore
async function getFeedProducts() {
  const querySnapshot = await getDocs(collection(db, "feedProducts"));
  const feedProducts: PigProduct[] = querySnapshot.docs.map((doc) =>
    //    ({
    //   id: doc.id,
    //   name: doc.data().name,
    //   stage: {
    //     starter: doc.data().stage.starter,
    //     grower: doc.data().stage.grower,
    //     finisher: doc.data().stage.finisher,
    //   },
    // })
    ({
      id: doc.id,
      ...(doc.data() as PigProduct), // Spread the data with type assertion
    })
  );

  return feedProducts;
}
const FarmerPage = async () => {
  const feedProducts = await getFeedProducts(); // Fetch the data
  return (
    <div className="flex flex-col mt-8   dark:bg-slate-800 ">
      {/* view ingredient */}
      <ViewFormulation />
      {/* <ProductFeed products={productsa} /> */}
      <PigFeed feeds={feedProduct} />
    </div>
  );
};

export default FarmerPage;

// data
export const productsa: Product[] = [
  {
    id: 1,
    title: "Apple",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/apple.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Bread",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/bread.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 3,
    title: "Bean",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/bean.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 4,
    title: "Butter",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/butter.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 5,
    title: "Cheese",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/cheese.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 6,
    title: "Chocolate",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/chocolate.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 7,
    title: "Corn",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/corn.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 8,
    title: "Dill",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/dill.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 9,
    title: "Eggs",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/egg.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 10,
    title: "Ice cream",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/iceCream.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 11,
    title: "Milk",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/milk.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 12,
    title: "Nutmeg",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/nutmeg.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 13,
    title: "Onion",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/onion.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 14,
    title: "Sugar",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/sugar.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 15,
    title: "Unicon",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/unicorn.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 16,
    title: "Yogurt",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/yogurt.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

// data for all the feed

export const feedProduct: PigProduct[] = [
  {
    id: 1,
    name: "Soya Beans",
    stage: {
      starter: 25, // Pig weight 15-30 kg
      grower: 20, // Pig weight 30-60 kg
      finisher: 15, // Pig weight over 60 kg
    },
  },
  {
    id: 2,
    name: "Rice Bran",
    stage: {
      starter: 25, // Pig weight 15-30 kg
      grower: 30, // Pig weight 30-60 kg
      finisher: 35, // Pig weight over 60 kg
    },
  },
  {
    id: 3,
    name: "Maize",
    stage: {
      starter: 20, // Pig weight 15-30 kg
      grower: 25, // Pig weight 30-60 kg
      finisher: 30, // Pig weight over 60 kg
    },
  },
  {
    id: 4,
    name: "Broken Rice",
    stage: {
      starter: 5, // Pig weight 15-30 kg
      grower: 5, // Pig weight 30-60 kg
      finisher: 5, // Pig weight over 60 kg
    },
  },
  {
    id: 5,
    name: "Wheat Bran",
    stage: {
      starter: 20, // Pig weight 15-30 kg
      grower: 15, // Pig weight 30-60 kg
      finisher: 10, // Pig weight over 60 kg
    },
  },
  {
    id: 6,
    name: "Leucaena Tree Leaves",
    stage: {
      starter: 5, // Pig weight 15-30 kg
      grower: 5, // Pig weight 30-60 kg
      finisher: 5, // Pig weight over 60 kg
    },
  },
  {
    id: 7,
    name: "barley",
    stage: {
      starter: 100, // Pig weight 15-30 kg
      grower: 100, // Pig weight 30-60 kg
      finisher: 100, // Pig weight over 60 kg
    },
  },
  {
    id: 8,
    name: "Crude Protein",
    stage: {
      starter: 16, // Pig weight 15-30 kg
      grower: 15, // Pig weight 30-60 kg
      finisher: 14, // Pig weight over 60 kg
    },
  },
];

//using server side props
// export const getServerSideProps = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "feedProducts"));
//     const feedProducts: PigProduct[] = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       name: doc.data().name,
//       stage: {
//         starter: doc.data().stage.starter,
//         grower: doc.data().stage.grower,
//         finisher: doc.data().stage.finisher,
//       },
//     }));

//     return {
//       props: {
//         initialFeedProducts: feedProducts,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching feed products:", error);
//     return {
//       props: {
//         initialFeedProducts: [],
//       },
//     };
//   }
// };
