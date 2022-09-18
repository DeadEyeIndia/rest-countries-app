import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://restcountries.com/v2";

const createRequest = (url) => ({ url });

export const countriesApi = createApi({
  reducerPath: "countries",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => createRequest(`/all`),
    }),
    getCountryDetails: builder.query({
      query: (name) => createRequest(`/name/${name}`),
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryDetailsQuery } =
  countriesApi;
