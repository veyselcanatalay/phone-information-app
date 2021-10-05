import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export interface Phone{
    id: string;
    name: string;
    model: string;
    announced: string;
    battery: string;
    memory: string;
    cpu: string;
    gpu: string;
    colors: string[];
    display_resolution: string;
    photo: string;
    completed: boolean; 
}

const initialState: Phone[] = [];

const phonesSlice = createSlice ({
    name: "phones",
    initialState,
    reducers: {
        addPhones: (state,action: PayloadAction<any>) => {
            const listPhones = {
                id: v4(), 
                name: action.payload.name, 
                model: action.payload.model, 
                announced: action.payload.announced, 
                battery: action.payload.battery, 
                memory: action.payload.memory, 
                cpu: action.payload.cpu, 
                gpu: action.payload.gpu,
                colors: action.payload.colors,
                display_resolution: action.payload.display_resolution,
                photo: action.payload.photo,
                completed: false
            };
            state.push(listPhones);
        },
        remove: (state, action: PayloadAction<any>) => {
            return state.filter((phone) => phone.id !== action.payload);
        },
        
    }
});

export default phonesSlice.reducer;

export const { addPhones, remove } = phonesSlice.actions;