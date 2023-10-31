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
   getServices3:builder.query({
    query:() =>'/services3'
   }),
   getHotelServicesData:builder.query({
    query:() =>'/hotelServicesData'
   }),
  }),
 

})

export const {useGetLatestProductsQuery, useGetServices3Query, useGetHotelServicesDataQuery} = hotelVillageApi
