import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_BASE_URL ||
      process.env.NEXT_PUBLIC_BASE_URL_LOCAL,
    // baseUrl: "https://api.reviewlift.net/api/v1",
    // base api

    prepareHeaders: (headers) => {
      const apiKey = process.env.NEXT_PUBLIC_PROPSTACK_API_KEY;
      // console.log("API Key:", apiKey); // Debugging line to check if the API key is being read correctly
      headers.set("X-API-KEY", apiKey);
      // console.log("hellloooo")
      // hello
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["testdata", "propstack"],
});

export default baseApi;
