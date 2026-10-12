import baseApi from "./baseApi";

const propstackApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPropertiesData: builder.query({
      query: (status) => ({
        url: `/units?status=${status}`,
        method: "GET",
      }),
      providesTags: ["propstack"],
    }),
    getSinglePropertiesData: builder.query({
      query: (id) => ({
        url: `/units/${id}`,
        method: "GET",
      }),
      providesTags: ["propstack"],
    }),
  }),
});

export const { useGetAllPropertiesDataQuery, useGetSinglePropertiesDataQuery } =
  propstackApi;
