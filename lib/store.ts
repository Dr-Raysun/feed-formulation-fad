import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/lib/slice/feedSlice";
import basketReducer from "@/lib/slice/basketSlice";
import cupReducer from "@/lib/slice/pigSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketReducer,
    cup: cupReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
