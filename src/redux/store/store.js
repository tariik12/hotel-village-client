import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { hotelVillageApi } from "../api/hotelVillageApi";
import userSlice from "../user/userSlice";

export const store = configureStore({
    reducer:{
        [hotelVillageApi.reducerPath]:hotelVillageApi.reducer,
        userSlice:userSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelVillageApi.middleware),
})

setupListeners(store.dispatch)