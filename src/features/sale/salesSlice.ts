import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export interface Sales{
    id: string;
    tel_model: string;
    sales_amount: number;
    date: Date; 
}

const initialState: Sales[] = [];

const salesSlice = createSlice ({
    name: "sales",
    initialState,
    reducers: {
        addSales: (state,action: PayloadAction<any>) => {
            const salesSlice = {
                id: v4(), 
                tel_model: action.payload.tel_model,
                sales_amount: action.payload.sales_amount,
                date: action.payload.date, 
            };
            state.push(salesSlice);
        },
        
    }
});

export default salesSlice.reducer;

export const { addSales} = salesSlice.actions;