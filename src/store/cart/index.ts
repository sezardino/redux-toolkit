import { IProduct } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) =>
      state.filter((p) => p.id !== action.payload),
  },
});
