import { createSlice } from "@reduxjs/toolkit";

// npm i @reduxjs/toolkit react-redux
export const countSlice = createSlice(
    {
        name:"counts",
        initialState:{count:0},
        reducers:{
            increment:(state,action)=>{state.count+=action.payload},
            decrement:(state,action)=>{state.count-=action.payload},
        }
    }
)

export const{increment,decrement} = countSlice.actions