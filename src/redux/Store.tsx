import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/redux/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
export type State = ReturnType<typeof store.getState>;
