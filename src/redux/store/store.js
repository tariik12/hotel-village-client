import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { hotelVillageApi } from "../api/hotelVillageApi";

export const store = configureStore({
    reducer:{
        [hotelVillageApi.reducerPath]:hotelVillageApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelVillageApi.middleware),
})

setupListeners(store.dispatch)