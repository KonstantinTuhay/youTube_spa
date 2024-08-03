import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const headers = {
//   Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
// };

export const apiGetMovies = createApi({
  reducerPath: "apiGetMovies",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SEARCH,
  }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => {
        return {
          url: `/search?key=AIzaSyBRbw7E44FNOaUi4VGBizBk6MnmpS8F4Bo`,
          method: "GET",
          // headers,
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
