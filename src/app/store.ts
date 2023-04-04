import { configureStore } from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import productSlice from "./reducers/productSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store