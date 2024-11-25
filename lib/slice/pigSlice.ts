import { PigProduct } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CounterState {
  itemsFeed: PigProduct[];
}

const initialState: CounterState = {
  itemsFeed: [],
};

export const cupSlice = createSlice({
  name: "cup",
  initialState,

  // action reducer
  reducers: {
    addToCup: (state, action) => {
      state.itemsFeed = [...state.itemsFeed, action.payload];
    },
    removeFromCup: (state, action) => {
      const index = state.itemsFeed.findIndex(
        (cupItem) => cupItem.id == action.payload.id
      );

      let newBasket = [...state.itemsFeed];
      if (index >= 0) {
        // the item exits in the basket... remove it...
        newBasket.splice(index, 1);
      } else {
        //item not found
        console.warn(
          `can't remove product(id: ${action.payload.id}) as it's not in the basket`
        );
      }
      state.itemsFeed = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCup, removeFromCup } = cupSlice.actions;
//reading the data from the store
export const selectItemsFeed = (state: RootState) => state.cup.itemsFeed;

export default cupSlice.reducer;
