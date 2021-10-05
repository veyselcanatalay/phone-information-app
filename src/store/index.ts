import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import phonesSlice from "../features/phones/phonesSlice";
import salesSlice from "../features/sale/salesSlice";


const store = configureStore({
    reducer: {
        phones: phonesSlice,
        sales: salesSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState> 
// {11} Bizim reducer içerisine girdiğimiz statelerin/sliceların typeları otomatik olarak alınıp tek bir RootState olarak döndürüyor

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); 
// {18} useAppDispatch her kullandığımızda type girmemize gerek kalmayacak.

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;