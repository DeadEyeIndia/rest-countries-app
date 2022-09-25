import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://restcountries.com/v2";

const createRequest = (url) => ({ url });

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => createRequest(`/all`),
    }),
    getCountryDetails: builder.query({
      query: (name) => createRequest(`/name/${name}`),
    }),
    getCountryName: builder.query({
      query: (code) => createRequest(`/alpha/${code}`),
    }),
    getCountriesListByRegion: builder.query({
      query: (region) => createRequest(`/region/${region}`),
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetCountryDetailsQuery,
  useGetCountryNameQuery,
  useGetCountriesListByRegionQuery,
} = countriesApi;
