import { bindActionCreators, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./product";

import { cartSlice } from "./cart";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

type RootState = ReturnType<typeof store.getState>;

export const actions = {
  ...cartSlice.actions,
};

export const useAppActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
