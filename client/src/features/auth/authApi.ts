import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "https://typescript-user-api.herokuapp.com"}),
  endpoints: (builder) => ({
//getallUser
  getUser: builder.query({
  query:()=>`api`
   }),
   // login
    signinUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/api/login",
          method: "post",
          body,
        };
      },
    }),
    signupUser: builder.mutation({
      query: (body: { name: string; email: string; password: string }) => {
        return {
          url: "/api/register",
          method: "post",
          body,
        };
      },
    }),


  }),
});

export const {useSigninUserMutation,useSignupUserMutation,useGetUserQuery} = authApi;
