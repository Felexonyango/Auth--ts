import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Iuser{

  name: string;
  username: string;
}
export const userApi = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints: (builder) => ({
      
      getUser: builder.query<Iuser[] ,string|void>({
          query:()=>`users`
      })
    })
})
    
export const {useGetUserQuery} =userApi