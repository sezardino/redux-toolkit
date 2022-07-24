import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "@/models";

export const productApi = createApi({
  reducerPath: "api/product",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => `/products`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => `/products/categories`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productApi;
