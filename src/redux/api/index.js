import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "users", 
    }),
    createPost: builder.mutation({
      query: (newPost) => ({
        url: "users", 
        method: "POST", 
        body: newPost, 
      }),
    }),
    deletePost : builder.mutation({
      query:(newPost) => ({
        url:`users/${id}`,
        method:'DELETE'
      })
    })
  }),
});

export const { useGetPostsQuery, useCreatePostMutation , useDeletePostMutation } = api;
