import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const hotelVillageApi = createApi({
  reducerPath:'api',
  tagTypes:['hotelTag'],
  baseQuery:fetchBaseQuery({
    baseUrl:'https://hotel-village-server.vercel.app'
  }),
  endpoints:(builder) =>({
   getLatestProducts:builder.query({
    query:() =>'/allProducts'
   }),
   getServices3:builder.query({
    query:() =>'/services3'
   }),
   getHotelServicesData:builder.query({
    query:() =>'/hotelServicesData',
    providesTags:['hotelTag']
   }),
   updateHotelServiceData:builder.mutation({
    query:({id,data}) =>({
      url:`/hotelServicesData/${id}`,
      method:'PATCH',
      body:data,
    }),
    invalidatesTags:['hotelTag']
   }),
   addHotelServicesData: builder.mutation({
    query:(data) =>({
      url:'/hotelServicesData',
      method:'POST',
      body:data,
    }),
    invalidatesTags:['hotelTag']
   }),

   deleteHotelServiceData:builder.mutation({
     query:(id) =>({
      url:`/hotelServicesData/${id}`,
       method:'DELETE',  
     }),
     invalidatesTags:['hotelTag']
   })
  }),

 

})

export const {useGetLatestProductsQuery, useGetServices3Query, useGetHotelServicesDataQuery, useAddHotelServicesDataMutation, useUpdateHotelServiceDataMutation, useDeleteHotelServiceDataMutation} = hotelVillageApi;
