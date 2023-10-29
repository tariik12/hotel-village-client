import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const hotelVillageApi = createApi({
  reducerPath:'hotelVillageApi',
  baseQuery:fetchBaseQuery({
    baseUrl:'https://hotel-village-server.vercel.app/'
  }),
  endpoints:(builder) =>({
   getLatestProducts:builder.query({
    query:() =>'/allProducts'
   }),
  }),
})

export const {useGetLatestProductsQuery} = hotelVillageApi
