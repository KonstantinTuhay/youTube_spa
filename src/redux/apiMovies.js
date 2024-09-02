import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiGetMovies = createApi({
  reducerPath: "apiGetMovies",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SEARCH,
  }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ([item, q, sort]) => {
        return {
          url: `/search?key=${
            import.meta.env.VITE_KEY
          }&part=snippet&type=video,channel,playlist&maxResults=${item}&q=${q}&order=${sort}`,
          method: "GET",
        };
      },
      transformResponse: (response) => response.items,
      onSuccess: (data) => console.log("Запрос успешен!", data),
      onError: (error) => console.error("Произошла ошибка:", error),
      providesTags: ["Movies"],
    }),
    getViewCount: builder.query({
      query: ([viewId]) => {
        return {
          url: `/videos?key=${
            import.meta.env.VITE_KEY
          }&part=statistics&id=${viewId}`,
          method: "GET",
        };
      },
      transformResponse: (response) => response.items,
      onSuccess: (data) => console.log("Запрос успешен!", data),
      onError: (error) => console.error("Произошла ошибка:", error),
      providesTags: ["Views"],
    }),
  }),
});

export const { useGetMoviesQuery, useGetViewCountQuery } = apiGetMovies;
