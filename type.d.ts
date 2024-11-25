export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
};

// Define a type for the different stages
export type Stage = {
  starter: number;
  grower: number;
  finisher: number;
};

// Define a type for each feed product
export type PigProduct = {
  id?: any; //i make it optional because firebase generate unique ID for us
  name: string;
  stage: Stage;
  stageType?: string; // Allow null, undefined, or one of the valid values
};
