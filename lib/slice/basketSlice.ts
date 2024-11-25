import { Product } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

export interface CounterState {
  items: Product[];
}

const initialState: CounterState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,

  //   action reducer
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id == action.payload.id
      );

      let newBasket = [...state.items];
      if (index >= 0) {
        // the item exits in the basket... remove it...
        newBasket.splice(index, 1);
      } else {
        //item not found
        console.warn(
          `can't remove product(id: ${action.payload.id}) as it's not in the basket`
        );
      }
      state.items = newBasket;
    },
    //recommendation basket
    recommendationBasket: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function

export const { addToBasket, removeFromBasket } = basketSlice.actions;
// selectors -this is how we pull information from the Global state
export const selectItems = (state: RootState) => state.basket.items; // where basket is the name and items is the initialstate
//  export const selectTotal = (state) =>
//   state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
