import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiGetMovies = createApi({
  reducerPath: "apiGetMovies",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SEARCH,
  }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ([item, q]) => {
        return {
          url: `/search?key=AIzaSyBRbw7E44FNOaUi4VGBizBk6MnmpS8F4Bo&part=snippet&type=video,channel,playlist&maxResults=${item}&q=${q}`,
          method: "GET",
        };
      },
      transformResponse: (response) => response.items,
      onSuccess: (data) => console.log("Запрос успешен!", data),
      onError: (error) => console.error("Произошла ошибка:", error),
      providesTags: ["Movies"],
    }),
  }),
});

export const { useGetMoviesQuery } = apiGetMovies;
